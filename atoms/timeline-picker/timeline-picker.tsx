import * as d3 from 'd3'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled from '../../styled'
import Button from '../button'

// @ts-ignore
import moment from 'moment-timezone'
import { Data, range, toUtc } from './util'
import { Tooltip } from './tooltip'

import { convertDateToTimezoneDate } from './util'

const AXIS_MARGIN = 20
const INTERNAL_DATE_FORMAT = 'YYYY/MM/DD HH:mm:mm'

type Bucket = {
  x1: number
  x2: number
  data: string[]
}

type Tooltip = {
  x: number
  y: number
  message: string
}

const MarkerHover = styled.g`
  :hover {
    cursor: ew-resize;
  }
`
const MarkerLine = styled.line`
  stroke: ${(props: any) => (!props.hidden ? '#3f66b7' : 'rgba(0, 0, 0, 0)')};
  stroke-width: ${(props: any) => (!props.hidden ? 2 : 30)};
`
const SVG = styled.svg`
  /* border: 1px solid red; */
`

const ZoomArea = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: any) => props.width}px;

  .areaMarker {
    fill: #3f66b7;
    opacity: 0.2;

    :hover {
      cursor: move;
      fill: #3f66b7;
      opacity: 0.5;
    }
  }

  .axis {
    color: #d6d6d8;
  }

  .data {
    fill: #5b5a5f;
    stroke-width: 1;
    stroke: black;
    :hover {
      fill: #a1a1a1;
    }
  }
`

const generateTooltipMessage = (data: any) => {
  const titles = data.slice(0, 5).map(d => {
    return (
      <React.Fragment>
        <span>{d}</span>
        <br />
      </React.Fragment>
    )
  })

  const extra = (
    <React.Fragment>
      <br />
      {`+${data.length - 5} other events`}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {titles}
      {data.length > 5 && extra}
    </React.Fragment>
  )
}

/**
 * Given a d3 selection, set the display to none.
 */
const hideElement = (element: d3.Selection<null, unknown, null, undefined>) =>
  element.attr('style', 'display: none')

/**
 * Domain is the minimum and maximum values that the scale contains.
 */
const getInitialTimeScale = (width: number) => {
  const min = new Date('1980-01-01:00:00.000z')
  // const max = new Date("1980-01-02:00:00.000z"); // Uncomment to easily test timezones
  const max = new Date()
  const timeScale = d3
    .scaleUtc()
    .domain([min, max])
    .nice()

  timeScale.range([AXIS_MARGIN, width - AXIS_MARGIN])

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
 * 1. Clicking to create a new range should not be hardcoded to +/- 1 year, but instance based on current xscale
 * (or start it from a drag instead of a click)
 *
 * 2. All x/y position translations should be dynamic based on height/width
 *
 * 3. Add onHover showing data points
 *
 * 4. On hover should work when the on hover is behind the area marker.
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
  const [height] = useState(300)

  const [dataBuckets, setDataBuckets] = useState<Bucket[]>([])
  const [tooltip, setTooltip] = useState<Tooltip>()

  const [xScale, setXScale] = useState(() => getInitialTimeScale(width))
  const [xAxis, setXAxis] = useState(() => d3.axisBottom(xScale))

  const initialX = getInitialTimeScale(width)

  /**
   * When a zoom event is triggered, use the transform event to create a new xScale,
   * then create a new xAxis using the scale and update existing xAxis
   */
  const handleZoom = () => {
    const transform = d3.event.transform

    // Returns a copy of the continuous scale x whose domain is transformed.
    const newXScale = transform.rescaleX(initialX)
    setXScale(() => newXScale)

    const newXAxis = xAxis.scale(newXScale)
    setXAxis(() => newXAxis)

    console.log(newXAxis.scale().domain()[0])

    // Apply the new xAxis
    d3.select('.axis--x').call(xAxis)
  }

  const zoomBehavior = d3
    .zoom()
    .scaleExtent([1, 60 * 60 * 24]) // Allows selections down to the minute at full zoom
    .translateExtent([[0, 0], [width, height]])
    .extent([[0, 0], [width, height]])
    .on('zoom', handleZoom)

  // @ts-ignore
  const zoomIn = () => {
    zoomBehavior.scaleBy(
      // @ts-ignore
      d3
        .select(d3ContainerRef.current)
        .transition()
        .duration(750),
      2
    )
  }

  // @ts-ignore
  const zoomOut = () => {
    zoomBehavior.scaleBy(
      // @ts-ignore
      d3
        .select(d3ContainerRef.current)
        .transition()
        .duration(750),
      0.5
    )
  }

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

      const originalTimeScale = getInitialTimeScale(width)

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
    const svg = d3
      .select(d3ContainerRef.current)
      .attr('width', width)
      .attr('height', height)

    svg
      .select('.axis--x')
      .attr('transform', `translate(0 ${height - 20})`)
      .call(xAxis)
  }

  useEffect(() => {
    if (d3ContainerRef.current) {
      renderInitialXAxis()

      const container = d3.select(d3ContainerRef.current)

      //@ts-ignore
      container.call(zoomBehavior)
    }
  }, [])

  // Add click handlers to listen to d3 mouse events
  // Note: Can't use arrow functions when detecting d3.mouse events because we don't want 'this' auto bound
  useEffect(() => {
    if (props.selectionRange !== undefined) {
      // When the d3Container click event triggers, set the selectionRange
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
          // Uncomment to enable click based range extension
          // if (convertedTimezoneValue < props.selectionRange[0]) {
          //   props.onChange([convertedTimezoneValue, props.selectionRange[1]])
          // } else if (props.selectionRange[1] < convertedTimezoneValue) {
          //   props.onChange([props.selectionRange[0], convertedTimezoneValue])
          // }
        }
      })
    }
  }, [xScale, props.selectionRange, props.timezone])

  // Add mouse handlers to listen to d3 mouse events
  useEffect(() => {
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
        // props.onHover(convertedHoverValue) // This line is causing performance issues because it triggers re-renders for some reason.
      }
    })

    // When the d3Container mouseleave event triggers, set the hoverValue to null and hide the hoverLine line
    d3.select(d3ContainerRef.current).on('mouseleave', function() {
      props.onHover && props.onHover(null)
      hideElement(d3.select(hoverLineRef.current))
    })
  }, [xScale, props.timezone, props.onHover])

  // Render rectangles
  useEffect(() => {
    const min = xScale.range()[0]
    const max = xScale.range()[1]

    const NUM_BUCKETS = Math.round(width / 30) // 30 is just a constant that I found to look good.

    const bucketWidth = (max - min) / NUM_BUCKETS
    const buckets: Bucket[] = range(NUM_BUCKETS).map(i => ({
      x1: min + bucketWidth * i,
      x2: min + bucketWidth * (i + 1),
      data: [],
    }))

    if (props.data && props.dateAttribute !== undefined) {
      d3.selectAll('.data').remove()

      const rectangleWidth = bucketWidth
      props.data.forEach(d => {
        const date = d.attributes[props.dateAttribute!]
        if (date == null) {
          return
        }

        const scaledDate = xScale(date)

        // const isSelected = false
        // const isSelected = inSelectionRange(
        //   scaledDate,
        //   props.selectionRange.map(r => xScale(r))
        // )

        // If rectangle to be created would fall into x range of another data point, add to it's cluster.

        // console.log(scaledDate)

        for (let i = 0; i < buckets.length; i++) {
          const b = buckets[i]
          if (b.x1 < scaledDate && scaledDate < b.x2) {
            b.data.push(d.id)
            break
          }
        }
      })

      // console.log(props.data[0].attributes.created)

      setDataBuckets(buckets)

      buckets.forEach((b, i) => {
        const rectangleHeight = b.data.length * 10
        d3.select('.data-holder')
          .append('rect')
          .attr('class', 'data')
          .attr('width', rectangleWidth)
          .attr('height', rectangleHeight)
          .attr('id', i)
          .attr(
            'transform',
            `translate(${(b.x1 + b.x2) / 2}, ${height -
              rectangleHeight -
              (AXIS_MARGIN + 1)})`
          )
        // .on('mouseenter', function(d, i) {
        //   const id = d3.select(this).node().id
        //   console.log('Data Elements in hovered item:', dataBuckets[id].data)
        //   // console.log('d: ', d)
        //   // console.log('i: ', i)
        // })
      })
    }
  }, [props.data, xScale, props.dateAttribute])

  useEffect(() => {
    d3.select('.data-holder')
      .selectAll('.data')
      .on('mouseleave', function() {
        setTooltip(null)
      })
      .on('mousemove', function(d, i) {
        const id = d3.select(this).node().id
        const { x, y } = d3.event
        setTooltip({
          x: x + 10,
          y: y - 20,
          message: generateTooltipMessage(dataBuckets[id].data),
        })
        // setTooltip()
        console.log('Data Elements in hovered item:', dataBuckets[id].data)
        // console.log('d: ', d)
        // console.log('i: ', i)
      })
  }, [dataBuckets])

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

        const markerHeight = height - 70

        leftMarker
          // TODO: Set y of this css transform dynamically
          .attr('transform', `translate(${xScale(leftUtc)}, ${markerHeight})`)
          .attr('style', 'display: block')

        rightMarker
          // TODO: Set y of this css transform dynamically
          .attr('transform', `translate(${xScale(rightUtc)}, ${markerHeight})`)
          .attr('style', 'display: block')

        areaMarker
          // TODO: Set y of this css transform dynamically
          .attr('transform', `translate(${xScale(leftUtc)},${markerHeight})`)
          .attr('width', xScale(rightUtc) - xScale(leftUtc))
          .attr('height', '50')
          .attr('style', 'display: block')
      } else {
        hideElement(leftMarker)
        hideElement(rightMarker)
        hideElement(areaMarker)
      }
    }
  }, [xScale, props.selectionRange])

  return (
    <Container width={width}>
      <ZoomArea>
        <Button emphasis="high" color="primary" onClick={() => zoomOut()}>
          -
        </Button>
        <Button emphasis="high" color="primary" onClick={() => zoomIn()}>
          +
        </Button>
      </ZoomArea>

      {tooltip && (
        <Tooltip message={tooltip.message} x={tooltip.x} y={tooltip.y} />
      )}

      <SVG ref={d3ContainerRef}>
        <g className="data-holder" />

        <rect
          ref={areaMarkerRef}
          style={{ display: 'none' }}
          className="areaMarker"
        />

        {/* Lines that appears upon clicking on the timeline */}
        <MarkerHover ref={leftMarkerRef}>
          <MarkerLine x1="0" y1="0" x2="0" y2="50" />
          <MarkerLine x1="0" y1="0" x2="0" y2="50" hidden={true} />
        </MarkerHover>
        <MarkerHover ref={rightMarkerRef}>
          <MarkerLine x1="0" y1="0" x2="0" y2="50" />
          <MarkerLine x1="0" y1="0" x2="0" y2="50" hidden={true} />
        </MarkerHover>

        {/* X Axis Placeholder */}
        <g className="axis axis--x" />
      </SVG>
    </Container>
  )
}

export default TimelinePicker
