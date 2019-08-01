import * as d3 from 'd3'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled from '../../styled'

// @ts-ignore
import moment from 'moment-timezone'
import { Data } from './util'

const hoverColor = '#000'
const CONSTANT_Y_POS = 330
const INTERNAL_DATE_FORMAT = 'YYYY/MM/DD HH:mm:mm'

const MarkerHover = styled.g`
  width: 10px;
`
const MarkerLine = styled.line`
  stroke: ${hoverColor};
  stroke-width: 4;
  :hover {
    cursor: ew-resize;
  }
`

const HoverLine = styled.line`
  stroke: ${hoverColor};
  opacity: 0.3;
  stroke-width: 2;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

/**
 * Given a d3 selection, set the display to none.
 */
const hideElement = (element: d3.Selection<null, unknown, null, undefined>) =>
  element.attr('style', 'display: none')

/**
 * Domain is the minimum and maximum values that the scale contains.
 */
const getInitialTimeScale = () => {
  const min = new Date('1980-01-01:00:00.000z')
  // const max = new Date("1980-01-02:00:00.000z"); //Uncomment to easily test timezones
  const max = new Date()
  const timeScale = d3
    .scaleUtc()
    .domain([min, max])
    .nice()

  return timeScale
}

/**
 * Determine if a number is between 2 other numbers (used for highlighting)
 *
 * @param date
 * @param selectionRange
 */
const inSelectionRange = (date: number, selectionRange: number[]) => {
  return selectionRange[0] < date && date < selectionRange[1]
}

/**
 * Convert a given date to UTC to render correctly on the Timeline.
 *
 * @param value Moment time object.
 * @param timezone Timezone the incoming value is in.
 */
const toUtc = (value: Date, timezone: string = '') =>
  moment.tz(value, timezone).toDate()

/**
 *
 * @param time UTC time
 * @param timezone Timezone to convert the incoming value to.
 */
const convertDateToTimezoneDate = (time: Date, timezone: string = ''): Date =>
  moment.tz(time, timezone).toDate()

interface TimelinePickerProps {
  /**
   * onChange handler that gets called when making a selection on the TimelinePicker
   */
  onChange: (v: Date[]) => void

  /**
   * Range of dates
   */
  selectionRange: Date[]

  /**
   * Timezone to use when displaying times
   */
  timezone?: string

  /**
   * onHover handler that gets called when hovering over the TimelinePicker
   */
  onHover?: (v: Date | null) => void

  /**
   * Data points
   */
  data?: Data[]

  /**
   * Attribute name to use when rendering data points.
   */
  dateAttribute?: string
}

/*
 * TODOS
 * --------------------
 * 1. Need to figure out what to do when data points fall in the same space (clustering).
 *
 * 2. Clicking to create a new range should not be hardcoded to +/- 1 year, but instance based on current xscale
 * (or start it from a drag instead of a click)
 *
 * 3. x/y positions should be dynamic based on height/width
 *
 * 4. Performance is a bit slow when greater than 20 data points are provided, presumably because the rectangles are removed
 * and redrawn every time the selection range changes in order to re-color them if they are "selected"
 */

// Please see https://alignedleft.com/tutorials/d3/scales for more information about d3 scales.
export const TimelinePicker = (props: TimelinePickerProps) => {
  /**
   * The useRef Hook creates a variable that "holds on" to a value across rendering
   * passes. In this case it will hold our component's SVG DOM element. It's
   * initialized null and React will assign it later (see the return statement)
   */
  const d3ContainerRef = useRef(null)
  const hoverLineRef = useRef(null)
  const leftMarkerRef = useRef(null)
  const rightMarkerRef = useRef(null)
  const areaMarkerRef = useRef(null)

  const [width] = useState(800)
  const [height] = useState(400)

  const [xScale, setXScale] = useState(() => getInitialTimeScale())
  const [xAxis, setXAxis] = useState(() => d3.axisBottom(xScale))

  /**
   * Creates the drag behavior used when selecting the left or right slider.
   *
   * Validation for sliders:
   * - Left slider cannot extend past minimum time in domain
   * - Right slider cannot extend past the maximum time in domain
   * - Left slider cannot be within 10 pixels of the right slider.
   * - Right slider cannot be within 10 pixels of the left slider.
   *
   * @param slider - Which slider the drag behavior should affect.
   * @param currentValues - The current values to be used when setting the value that isn't changed.
   */
  const getEdgeDrag = (slider: 'LEFT' | 'RIGHT', currentValues: Date[]) =>
    d3
      .drag()
      .on('start', () => {
        hideElement(d3.select(hoverLineRef.current))
      })
      .on('drag', () => {
        const dragValue = xScale.invert(d3.event.x)

        const dateWithTimezone = convertDateToTimezoneDate(
          dragValue,
          props.timezone
        )

        const BUFFER = 10 // Buffer in pixels to keep sliders from overlapping/crossing

        if (slider === 'LEFT') {
          const maximumX = xScale(currentValues[1]) - BUFFER
          if (d3.event.x <= maximumX && dateWithTimezone > xScale.domain()[0]) {
            props.onChange([dateWithTimezone, currentValues[1]])
          }
        } else if (slider === 'RIGHT') {
          const minimumX = xScale(currentValues[0]) + BUFFER
          if (d3.event.x >= minimumX && dateWithTimezone < xScale.domain()[1]) {
            props.onChange([currentValues[0], dateWithTimezone])
          }
        }
      })

  /**
   * Create the drag behavior used when selecting the middle area between a range.
   *
   * Validation for brush:
   * - Cannot go past the minimum or maximum times defined in the initial timescale
   *
   * @param currentValues - The current values to be used when calculating the new values
   */
  const getBrushDrag = (currentValues: Date[]) =>
    d3.drag().on('drag', () => {
      const value = d3.event.x - d3.event.subject.x

      const currentLeft = xScale(currentValues[0])
      const currentRight = xScale(currentValues[1])

      const newLeft = currentLeft + value
      const newRight = currentRight + value

      const newLeftDate = convertDateToTimezoneDate(
        xScale.invert(newLeft),
        props.timezone
      )

      const newRightDate = convertDateToTimezoneDate(
        xScale.invert(newRight),
        props.timezone
      )

      const originalTimeScale = getInitialTimeScale()

      if (
        originalTimeScale.domain()[0] < newLeftDate &&
        newRightDate < originalTimeScale.domain()[1]
      ) {
        props.onChange([newLeftDate, newRightDate])
      }
    })

  /**
   * Range is the range of possible output values used in display.
   * Domain maps to Range
   * i.e. Dates map to Pixels
   */
  const renderInitialXAxis = () => {
    const axisMargin = 20

    xScale.range([axisMargin, width - axisMargin])

    const svg = d3
      .select(d3ContainerRef.current)
      .attr('width', width)
      .attr('height', height)

    svg
      .select('.axis--x')
      .attr('transform', `translate(0 380)`)
      .call(xAxis)
  }

  /**
   * When a zoom event is triggered, use the transform event to create a new xScale,
   * then create a new xAxis using the scale and update existing xAxis
   */
  const handleZoom = () => {
    const transform = d3.event.transform

    // Returns a copy of the continuous scale x whose domain is transformed.
    const newXScale = transform.rescaleX(xScale)
    setXScale(() => newXScale)

    // Create a new xAxis with the new timeScale
    const newXAxis = xAxis.scale(newXScale)
    setXAxis(() => newXAxis)

    // Apply the new xAxis
    d3.select('.axis--x').call(newXAxis)
  }

  useEffect(() => {
    if (d3ContainerRef.current) {
      renderInitialXAxis()

      const container = d3.select(d3ContainerRef.current)
      container.call(
        //@ts-ignore
        d3
          .zoom()
          .scaleExtent([1, 60 * 60 * 24]) // Allows selections down to the minute at full zoom
          .translateExtent([[0, 0], [width, height]])
          .on('zoom', handleZoom)
      )
    }
  }, [])

  // Add mouse handlers to listen to d3 mouse events
  // Note: Can't use arrow functions when detecting d3.mouse events because we don't want 'this' auto bound
  useEffect(() => {
    if (props.selectionRange !== undefined) {
      // When the d3Container mousemove event triggers, show the hover line
      d3.select(d3ContainerRef.current).on('mousemove', function() {
        const coord = d3.mouse(this as any)
        d3.select(hoverLineRef.current)
          .attr('transform', `translate(${coord[0]}, 250)`)
          .attr('style', 'display: block')

        if (props.onHover) {
          const hoverValue = xScale.invert(coord[0])
          const convertedHoverValue = convertDateToTimezoneDate(
            hoverValue,
            props.timezone
          )
          props.onHover(convertedHoverValue)
        }
      })

      // When the d3Container mouseleave event triggers, set the hoverValue to null and hide the hoverLine line
      d3.select(d3ContainerRef.current).on('mouseleave', function() {
        props.onHover && props.onHover(null)
        hideElement(d3.select(hoverLineRef.current))
      })

      // When the d3Container click event triggers, set the clickValue
      d3.select(d3ContainerRef.current).on('click', function() {
        const coord = d3.mouse(this as any)
        const value = xScale.invert(coord[0])
        const convertedTimezoneValue = convertDateToTimezoneDate(
          value,
          props.timezone
        )

        // If values are not provided, first click will create a new range at +/- 1 year from the click point
        if (props.selectionRange.length === 0) {
          const left = moment(
            convertedTimezoneValue,
            INTERNAL_DATE_FORMAT
          ).subtract(365, 'days')

          const right = moment(
            convertedTimezoneValue,
            INTERNAL_DATE_FORMAT
          ).add(365, 'days')

          props.onChange([left, right])
        } else {
          if (convertedTimezoneValue < props.selectionRange[0]) {
            props.onChange([convertedTimezoneValue, props.selectionRange[1]])
          } else if (props.selectionRange[1] < convertedTimezoneValue) {
            props.onChange([props.selectionRange[0], convertedTimezoneValue])
          }
        }
      })
    }
  }, [xScale, props.selectionRange, props.timezone, props.onHover])

  // Render rectangles
  useEffect(() => {
    if (
      d3ContainerRef.current &&
      props.data &&
      props.dateAttribute !== undefined
    ) {
      d3.selectAll('.data').remove()

      const container = d3.select(d3ContainerRef.current)

      props.data.forEach(d => {
        const date = d.attributes[props.dateAttribute!]
        if (date == null) {
          return
        }

        const scaledDate = xScale(date)
        const isSelected = inSelectionRange(
          scaledDate,
          props.selectionRange.map(r => xScale(r))
        )

        container
          .append('rect')
          .attr('class', 'data')
          .attr('fill', `${isSelected ? 'blue' : 'grey'}`)
          .attr('width', '10')
          .attr('height', '20')
          .attr('transform', `translate(${scaledDate}, ${CONSTANT_Y_POS + 30})`)
      })
    }
  }, [props.data, xScale, props.selectionRange, props.dateAttribute])

  // When the selection range is changed or the scale changes, update the markers and drag behaviors
  useEffect(() => {
    d3.select(leftMarkerRef.current).call(
      // @ts-ignore
      getEdgeDrag('LEFT', props.selectionRange)
    )

    d3.select(rightMarkerRef.current).call(
      // @ts-ignore
      getEdgeDrag('RIGHT', props.selectionRange)
    )

    // @ts-ignore
    d3.select(areaMarkerRef.current).call(getBrushDrag(props.selectionRange))

    if (
      leftMarkerRef.current &&
      rightMarkerRef.current &&
      areaMarkerRef.current
    ) {
      const leftMarker = d3.select(leftMarkerRef.current)
      const rightMarker = d3.select(rightMarkerRef.current)
      const areaMarker = d3.select(areaMarkerRef.current)

      if (props.selectionRange.length == 2) {
        const [leftValue, rightValue] = props.selectionRange
        const leftUtc = toUtc(leftValue)
        const rightUtc = toUtc(rightValue)

        leftMarker
          // TODO: Set y of this css transform dynamically
          .attr(
            'transform',
            `translate(${xScale(leftUtc)}, ${CONSTANT_Y_POS + 5})`
          )
          .attr('style', 'display: block')

        rightMarker
          // TODO: Set y of this css transform dynamically
          .attr(
            'transform',
            `translate(${xScale(rightUtc)}, ${CONSTANT_Y_POS + 5})`
          )
          .attr('style', 'display: block')

        areaMarker
          // TODO: Set y of this css transform dynamically
          .attr('transform', `translate(${xScale(leftUtc)},${CONSTANT_Y_POS})`)
          .attr('width', xScale(rightUtc) - xScale(leftUtc))
          .attr('height', '50')
          .attr('fill', '#a9a9a9')
          .attr('opacity', 0.2)
          .attr('style', 'display: block')
      } else {
        hideElement(leftMarker)
        hideElement(rightMarker)
        hideElement(areaMarker)
      }
    }
  }, [xScale, props.selectionRange])

  return (
    <Container>
      <svg
        style={{
          marginBottom: '50px',
        }}
        ref={d3ContainerRef}
      >
        {/* Vertical line showing the current hover position */}
        <g ref={hoverLineRef} style={{ display: 'none' }}>
          <HoverLine x1="0" y1="0" x2="0" y2="200" />
        </g>

        <rect ref={areaMarkerRef} style={{ display: 'none' }} />

        {/* Lines that appears upon clicking on the timeline */}
        <MarkerHover ref={leftMarkerRef} style={{ display: 'none' }}>
          <MarkerLine x1="0" y1="0" x2="0" y2="40" />
        </MarkerHover>
        <MarkerHover ref={rightMarkerRef} style={{ display: 'none' }}>
          <MarkerLine x1="0" y1="0" x2="0" y2="40" />
        </MarkerHover>

        {/* X Axis Placeholder */}
        <g className="axis axis--x" />
      </svg>
    </Container>
  )
}

export default TimelinePicker
