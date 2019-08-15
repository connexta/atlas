import * as d3 from 'd3'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipProps } from './tooltip'
import {
  convertDateToTimezoneDate,
  range,
  toUtc,
  formatDate,
  dateWithinRange,
} from './util'
import styled from '../../styled'
import { useSelectionRange } from './hooks'
import _ = require('lodash')
import { Timescale } from './types'

// Constants
const AXIS_MARGIN = 20
const AXIS_HEIGHT = 15

// Color Theme
const TEXT_COLOR = '#d6d6d8'
const PRIMARY_COLOR = '#2a616a'
const PRIMARY_LIGHT_COLOR = '#31a6ad'

const ContextRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

const HoverLine = styled.line`
  stroke: ${PRIMARY_LIGHT_COLOR};
  stroke-width: 3;
  pointer-events: none;
`
const MarkerHover = styled.g`
  :hover {
    cursor: ew-resize;
  }
`
const MarkerLine = styled.line`
  stroke: ${(props: any) =>
    !props.hidden ? PRIMARY_LIGHT_COLOR : 'rgba(0, 0, 0, 0)'};
  stroke-width: ${(props: any) => (!props.hidden ? 2 : 18)};
`

const BUTTON_SECONDARY_COLOR = '#25404a'
const Button = styled.button`
  display: flex;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  color: white;
  min-width: 3rem;
  height: 3rem;
  border: 1px solid #2e5860;

  background-color: ${(props: any) =>
    props.color === 'primary' ? PRIMARY_LIGHT_COLOR : BUTTON_SECONDARY_COLOR};
  font-size: ${(props: any) => (props.icon ? '2rem' : '1rem')};
  padding: ${(props: any) => (props.icon ? '' : '0px 20px')};
  margin-left: ${(props: any) => (props.icon ? '' : '15px !important')};

  :hover {
    border: 1px solid ${PRIMARY_LIGHT_COLOR};
  }

  :focus {
    outline: none;
  }
`

const DateAttributeSelect = styled.select`
  display: inline-block;
  width: auto;
  margin: 10px;
  color: ${PRIMARY_LIGHT_COLOR};
  opacity: 1;
  background-color: transparent;
  border: none;
  font-size: 16px;
`

const ButtonArea = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;

  button {
    margin-left: 5px;
  }
`

const Root = styled.div`
  display: flex;
  flex-direction: column;

  .brushBar {
    /* This will let you select/hover records behind area, but can't brush-drag area if it's set. */
    pointer-events: none;
    opacity: 0.5;

    /* If it's discovered that brush dragging is wanted more than hovering behind the highlighted brush area, 
    simply comment the above lines and uncomment this opacity */
    /* opacity: 0.1; */
    fill: ${PRIMARY_LIGHT_COLOR};
    display: none;

    :hover {
      cursor: move;
      fill: ${PRIMARY_LIGHT_COLOR};
      opacity: 0.5;
    }
  }

  .axis {
    color: ${TEXT_COLOR};
    font-size: 0.9rem;
    :hover {
      cursor: ew-resize;
    }
  }

  .selected {
    fill: ${PRIMARY_LIGHT_COLOR} !important;
  }

  .data {
    fill: #3a4a54;
    fill-opacity: 0.7;
    :hover {
      stroke-width: 2px;
      stroke: ${PRIMARY_COLOR};
    }
  }
`

const TimeText = styled.div`
  color: white;
  margin: 10px;
  font-family: 'Open Sans', sans-serif;
  span {
    color: ${TEXT_COLOR};
  }

  br {
    line-height: 150%;
  }
`

const Message = styled.span`
  font-family: 'Open Sans', sans-serif;
  margin: 10px;
  color: ${TEXT_COLOR};
`

// Helper Methods
const generateTooltipMessage = (data: string[]) => {
  const titles = data.slice(0, 5).map(d => {
    return (
      <React.Fragment>
        <span>{d}</span>
        <br />
      </React.Fragment>
    )
  })

  const otherResults = (
    <React.Fragment>
      <br />
      {`+${data.length - 5} other results`}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {titles}
      {data.length > 5 && otherResults}
    </React.Fragment>
  )
}

/**
 * Given a d3 selection, set the display to none.
 */
const hideElement = (element: d3.Selection<null, unknown, null, undefined>) =>
  element.attr('style', 'display: none')

/**
 * Given a d3 selection, set the display to block.
 */
const showElement = (element: d3.Selection<null, unknown, null, undefined>) =>
  element.attr('style', 'display: block')

/**
 * Domain is the minimum and maximum values that the scale contains.
 */
const getTimescaleFromWidth = (width: number): Timescale => {
  const min = new Date('1980-01-01:00:00.000z')
  // const max = new Date("1980-01-02:00:00.000z"); // Uncomment to easily test timezones
  const max = new Date()
  const timeScale = d3
    .scaleUtc()
    .domain([min, max])
    .nice()

  timeScale.range([AXIS_MARGIN, width - AXIS_MARGIN])

  console.log('Returning timescale with range ', timeScale.range())

  return timeScale
}

const getPossibleDateAttributes = (data: Data[]): string[] => {
  return _(data)
    .map(d => d.attributes) //{created: {display: "Created", value: new Date()}}
    .flatMap(o => Object.keys(o)) //[created]
    .uniq()
    .value()
}

// Types
export type Data = {
  id: string
  selected: boolean
  attributes: {
    [key: string]: Date
  }
}

type Bucket = {
  x1: number
  x2: number
  selected: boolean
  data: Data[]
}
interface TimelineProps {
  /**
   * Mode that the timeline should be in.
   */
  mode?: 'single' | 'range'

  /**
   * Timezone to use when displaying times.
   */
  timezone?: string

  /**
   * Data points
   */
  data?: Data[]

  /**
   * Alias Map for date attributes
   */
  dateAttributeAliases?: { [key: string]: string }

  /**
   * Called when the done button is clicked, providing the current selection range.
   */
  onDone?: (selectionRange: Date[]) => void

  /**
   * Called when the a selection is made.
   */
  onSelect?: (data: Data[]) => void
}

/*
 * TODOS
 * --------------------
 *
 * 1. All x/y position translations should be dynamic based on height/width
 *
 * 2. On hover should work when the on hover is behind the area marker.
 */

// Please see https://alignedleft.com/tutorials/d3/scales for more information about d3 scales.
export const Timeline = (props: TimelineProps) => {
  /**
   * The useRef Hook creates a variable that "holds on" to a value across rendering
   * passes. In this case it will hold our component's SVG DOM element. It's
   * initialized null and React will assign it later (see the return statement)
   */
  const rootRef = useRef(null)
  const d3ContainerRef = useRef(null)
  const hoverLineRef = useRef(null)
  const leftMarkerRef = useRef(null)
  const rightMarkerRef = useRef(null)
  const brushBarRef = useRef(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  // const [k, setK] = useState(1)
  const [xScale, setXScale] = useState(() => getTimescaleFromWidth(width))
  const [xAxis, setXAxis] = useState(() =>
    d3.axisBottom(xScale).tickSize(AXIS_HEIGHT)
  )

  useEffect(() => {
    if (width != 0) {
      console.log(`Width updated to ${width}`)
      setXScale(() => getTimescaleFromWidth(width))
    }
  }, [width])

  useEffect(() => {
    console.log(`xScale updated to ${xScale.range()}`)
    const [left, right] = xScale.range()

    if (left < right) {
      const newXAxis = xAxis.scale(xScale)

      setXAxis(() => newXAxis)
      d3.select('.axis--x').call(newXAxis)
    }
  }, [xScale])

  useEffect(() => {
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect()
      setHeight(rect.height)
      setWidth(rect.width)
      console.log('Initial Width: ', rect.width)

      // TODO: Why is the bounding client rect height so low
    }
  }, [rootRef])

  /**
   * Every second, poll to see the new rect width.
   * If the new rect width is different than current width, update the width.
   */

  useEffect(() => {
    const interval = setInterval(() => {
      if (rootRef.current) {
        const rect = rootRef.current.getBoundingClientRect()

        if (rect.width !== width) {
          setWidth(rect.width)
          clearInterval(interval)
          console.log('Setting width and clearing interval')
          console.log('Scaling to', 1)
          zoomBehavior.scaleTo(
            // @ts-ignore
            d3
              .select(d3ContainerRef.current)
              .transition()
              .duration(0),
            1
          )
        }
      }
    }, 100)
  }, [rootRef, width])

  const [dataBuckets, setDataBuckets] = useState<Bucket[]>([])
  const [tooltip, setTooltip] = useState<TooltipProps | null>()

  const possibleDateAttributes = getPossibleDateAttributes(props.data || [])
  const [selectedDateAttribute, setSelectedDateAttribute] = useState<
    string | undefined
  >(possibleDateAttributes[0] || undefined)

  const [isDragging, setIsDragging] = useState(false)

  const [selectionRange, setSelectionRange] = useSelectionRange(
    [],
    getTimescaleFromWidth(width)
  )
  const markerHeight = height - 70 - AXIS_HEIGHT
  /**
   * When a zoom event is triggered, use the transform event to create a new xScale,
   * then create a new xAxis using the scale and update existing xAxis
   */
  const handleZoom = () => {
    // Tooltip sticks around without this.
    setTooltip(null)

    const transform = d3.event.transform
    console.log(d3.event.transform)
    // setK(d3.event.transform.k)

    if (width != 0) {
      // Returns a copy of the continuous scale x whose domain is transformed.
      const newXScale = transform.rescaleX(getTimescaleFromWidth(width))
      setXScale(() => newXScale)

      const newXAxis = xAxis.scale(newXScale)
      setXAxis(() => newXAxis)

      // Apply the new xAxis
      d3.select('.axis--x').call(xAxis)
    }
  }

  const zoomBehavior = d3
    .zoom()
    .scaleExtent([1, 60 * 60 * 24]) // Allows selections down to the minute at full zoom
    .translateExtent([[0, 0], [width, height]])
    .extent([[0, 0], [width, height]])
    .filter(() => {
      // If event triggered below xAxis, let default zoom behavior handle it (allows panning)
      if (d3.event.y > height - 5) {
        return true
      }

      const shouldFilterEvent = d3.event.type !== 'mousedown'
      if (!shouldFilterEvent) {
        console.debug('Ignoring event type: ', d3.event.type)
      }
      return shouldFilterEvent
    })
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

  useEffect(() => {
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
        .attr('transform', `translate(0 ${height - 20 - AXIS_HEIGHT})`)
        .call(xAxis)
    }

    if (d3ContainerRef.current) {
      renderInitialXAxis()

      const container = d3.select(d3ContainerRef.current)

      //@ts-ignore
      container.call(zoomBehavior)
    }
  }, [height, width])

  // Add mouse handlers to listen to d3 mouse events
  useEffect(() => {
    // When the d3Container mousemove event triggers, show the hover line
    d3.select(d3ContainerRef.current).on('mousemove', function() {
      const coord = d3.mouse(this as any)
      d3.select(hoverLineRef.current)
        .attr('transform', `translate(${coord[0]}, ${markerHeight})`)
        .attr('style', 'display: block')
    })

    // When the d3Container mouseleave event triggers, set the hoverValue to null and hide the hoverLine line
    d3.select(d3ContainerRef.current).on('mouseleave', function() {
      hideElement(d3.select(hoverLineRef.current))
    })
  }, [xScale, props.timezone])

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
      selected: false,
    }))

    if (props.data && selectedDateAttribute !== undefined) {
      d3.selectAll('.data').remove()

      const rectangleWidth = bucketWidth
      props.data.forEach(d => {
        const date = d.attributes[selectedDateAttribute!]
        if (date == null) {
          return
        }

        const scaledDate = xScale(date)

        for (let i = 0; i < buckets.length; i++) {
          const b = buckets[i]
          if (b.x1 < scaledDate && scaledDate < b.x2) {
            b.data.push(d)
            if (d.selected) {
              b.selected = true
            }
            break
          }
        }
      })

      // console.log('Existing buckets: ', dataBuckets)
      setDataBuckets(buckets)
      // console.log('New buckets: ', buckets)

      buckets.forEach((b, i) => {
        const rectangleHeight = b.data.length * 10
        const x = (b.x1 + b.x2) / 2 - 15

        const y = height - rectangleHeight - (AXIS_MARGIN + AXIS_HEIGHT)

        d3.select('.data-holder')
          .append('rect')
          .attr('class', `data ${b.selected ? 'selected' : ''}`)
          .attr('width', rectangleWidth - 5)
          .attr('height', rectangleHeight)
          .attr('id', i)
          .attr('transform', `translate(${x}, ${y})`)
          .append('rect')
      })
    }
  }, [props.data, xScale, selectedDateAttribute, width, height])

  useEffect(() => {
    d3.select('.data-holder')
      .selectAll('.data')
      .on('mouseleave', function() {
        setTooltip(null)
      })
      .on('click', function() {
        //@ts-ignore
        // const id = d3.select(this).node().id
        // setSelectionRange([])
        // props.onSelect && props.onSelect(dataBuckets[id].data.map(d => d.id))
      })
      .on('mousemove', function() {
        // @ts-ignore
        const id = d3.select(this).node().id
        const { x, y } = d3.event
        const tooltipInBounds = x <= width - 200
        setTooltip({
          // If the tooltip will overflow off the timeline, set x to left of the cursor instead of right.
          x: tooltipInBounds ? x + 25 : x - 200,
          y: y - 20,
          message: generateTooltipMessage(dataBuckets[id].data.map(d => d.id)),
        })
      })
  }, [dataBuckets])

  // If dragging is finished, update selected results.
  // Check if selection range is empty array
  useEffect(() => {
    if (
      !isDragging &&
      props.data &&
      selectedDateAttribute !== undefined &&
      !props.mode
    ) {
      if (selectionRange.length == 2) {
        const x1 = xScale(selectionRange[0])
        const x2 = xScale(selectionRange[1])

        // Prefilter to only buckets we care about
        const bucketsContainingRelevantData = dataBuckets.filter(
          b =>
            (x1 < b.x1 && b.x2 < x2) ||
            (b.x1 < x1 && x1 < b.x2) ||
            (b.x1 < x2 && x2 < b.x2)
        )

        // Get the data inside those buckets that falls within the selection
        const dataToSelect = _.flatMap(
          bucketsContainingRelevantData,
          (b: Bucket) => b.data
        ).filter((d: Data) =>
          dateWithinRange(d.attributes[selectedDateAttribute!], selectionRange)
        )

        props.onSelect && props.onSelect(dataToSelect)
      }
    }
  }, [isDragging])

  useEffect(() => {
    /**
     *
     * Selection Drag does two things:
     * 1. When the user drags across the timeline, a range selection will be created.
     * 2. If the drag event is only 150ms or less from start to finish AND ends on a rect object,
     * assume that the user meant to click instead of drag, and properly trigger a click action on the rect.
     *
     * @param currentDataBuckets
     */
    const getSelectionDrag = () => {
      let clickStart: number

      return d3
        .drag()
        .on('start', () => {
          clickStart = d3.event.x
          const newLeftDate = convertDateToTimezoneDate(
            xScale.invert(clickStart),
            props.timezone
          )

          if (props.mode === 'single') {
            setSelectionRange([newLeftDate])
          } else {
            setIsDragging(true)
            hideElement(d3.select(hoverLineRef.current))
            setSelectionRange([newLeftDate])
          }
        })
        .on('end', () => {
          if (!props.mode) {
            showElement(d3.select(hoverLineRef.current))
            setIsDragging(false)
            const clickDistance = clickStart - d3.event.x
            const sourceEvent = d3.event.sourceEvent
            if (Math.abs(clickDistance) < 5) {
              const nodeName = sourceEvent.srcElement.nodeName
              setSelectionRange([])
              if (nodeName === 'rect' || nodeName === 'line') {
                const x = d3.event.x
                const bucket = dataBuckets.find(b => b.x1 < x && x <= b.x2)
                bucket && props.onSelect && props.onSelect(bucket.data)
              }
            }
          }
        })
        .on('drag', () => {
          if (props.mode !== 'single') {
            const diff = d3.event.x - d3.event.subject.x
            let dragCurrent = clickStart + diff

            const initialDate = convertDateToTimezoneDate(
              xScale.invert(clickStart),
              props.timezone
            )

            const dragDate = convertDateToTimezoneDate(
              xScale.invert(dragCurrent),
              props.timezone
            )

            if (diff > 0) {
              setSelectionRange([initialDate, dragDate])
            } else {
              setSelectionRange([dragDate, initialDate])
            }
          }
        }) as any
    }

    d3.select(d3ContainerRef.current).call(getSelectionDrag())
  }, [dataBuckets, selectionRange, xScale])

  useEffect(() => {
    /**
     * Creates the drag behavior used when selecting the left or right slider.
     *
     * Validation for sliders:
     * - Left slider cannot be within 10 pixels of the right slider.
     * - Right slider cannot be within 10 pixels of the left slider.
     *
     * @param slider - Which slider the drag behavior should affect.
     * @param currentValues - The current values to be used when setting the value that isn't changed.
     */
    const getEdgeDrag = (slider: 'LEFT' | 'RIGHT') =>
      d3
        .drag()
        .on('start', () => {
          hideElement(d3.select(hoverLineRef.current))
          setIsDragging(true)
        })
        .on('end', () => setIsDragging(false))
        .on('drag', () => {
          const dragValue = xScale.invert(d3.event.x)

          const dateWithTimezone = convertDateToTimezoneDate(
            dragValue,
            props.timezone
          )

          const BUFFER = 10 // Buffer in pixels to keep sliders from overlapping/crossing

          if (slider === 'LEFT') {
            const maximumX = xScale(selectionRange[1]) - BUFFER
            if (d3.event.x <= maximumX) {
              setSelectionRange([dateWithTimezone, selectionRange[1]])
            }
          } else if (slider === 'RIGHT') {
            const minimumX = xScale(selectionRange[0]) + BUFFER
            if (d3.event.x >= minimumX) {
              setSelectionRange([selectionRange[0], dateWithTimezone])
            }
          }
        }) as any

    d3.select(leftMarkerRef.current).call(getEdgeDrag('LEFT'))
    d3.select(rightMarkerRef.current).call(getEdgeDrag('RIGHT'))
  }, [xScale, selectionRange])

  useEffect(() => {
    /**
     * Create the drag behavior used when selecting the middle area between a range.
     *
     * Validation for brush:
     * - Cannot go past the minimum or maximum times defined in the initial timescale
     *
     * @param currentValues - The current values to be used when calculating the new values
     */
    const getBrushDrag = (currentValues: Date[]) =>
      d3
        .drag()
        .on('start', () => {
          setIsDragging(true)
          hideElement(d3.select(hoverLineRef.current))
        })
        .on('end', () => setIsDragging(false))
        .on('drag', () => {
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

          setSelectionRange([newLeftDate, newRightDate])
        }) as any

    d3.select(brushBarRef.current).call(getBrushDrag(selectionRange))
  }, [xScale, selectionRange])

  // When the selection range is changed or the scale changes, update the markers and drag behaviors
  useEffect(() => {
    if (
      leftMarkerRef.current &&
      rightMarkerRef.current &&
      brushBarRef.current
    ) {
      const leftMarker = d3.select(leftMarkerRef.current)
      const rightMarker = d3.select(rightMarkerRef.current)
      const brushBar = d3.select(brushBarRef.current)

      if (selectionRange.length == 2 && props.mode !== 'single') {
        const [leftValue, rightValue] = selectionRange
        const leftUtc = toUtc(leftValue)
        const rightUtc = toUtc(rightValue)

        leftMarker
          .attr('transform', `translate(${xScale(leftUtc)}, ${markerHeight})`)
          .attr('style', 'display: block')

        rightMarker
          .attr('transform', `translate(${xScale(rightUtc)}, ${markerHeight})`)
          .attr('style', 'display: block')

        brushBar
          .attr('transform', `translate(${xScale(leftUtc)},${markerHeight})`)
          .attr('width', xScale(rightUtc) - xScale(leftUtc))
          .attr('height', '50')
          .attr('style', 'display: block')
      } else if (selectionRange.length === 1 && props.mode === 'single') {
        const leftMarker = d3.select(leftMarkerRef.current)
        const leftUtc = toUtc(selectionRange[0])
        leftMarker
          .attr('transform', `translate(${xScale(leftUtc)}, ${markerHeight})`)
          .attr('style', 'display: block')
      } else {
        hideElement(leftMarker)
        hideElement(rightMarker)
        hideElement(brushBar)
      }
    }
  }, [xScale, selectionRange, props.mode])

  const renderContext = () => {
    // Single States - Empty, Single Time
    if (props.mode === 'single') {
      if (!selectionRange[0]) {
        return (
          <Message>Click to select a time. Zoom with the scroll wheel.</Message>
        )
      }
      return (
        <TimeText>
          <b>Time</b>
          <br />
          <span>{selectionRange[0] && formatDate(selectionRange[0])}</span>
        </TimeText>
      )
      // Range States - Empty, Range of Times
    } else if (props.mode === 'range') {
      if (!selectionRange[0]) {
        return (
          <Message>Drag to select a range. Zoom with the scroll wheel.</Message>
        )
      }
      return (
        <React.Fragment>
          <TimeText>
            <b>Start</b>
            <br />
            <span>{selectionRange[0] && formatDate(selectionRange[0])}</span>
          </TimeText>
          <TimeText>
            <b>End</b>
            <br />
            <span>{selectionRange[1] && formatDate(selectionRange[1])}</span>
          </TimeText>
        </React.Fragment>
      )
      // Selection States - Empty, <Start, <End>>
    } else {
      if (!selectionRange[0]) {
        return (
          <Message>
            Click to select a cluster of results. Zoom with the scroll wheel.
          </Message>
        )
      }
      return (
        <React.Fragment>
          <TimeText>
            <b>Start</b>
            <br />
            <span>{selectionRange[0] && formatDate(selectionRange[0])}</span>
          </TimeText>
          <TimeText>
            <b>End</b>
            <br />
            <span>{selectionRange[1] && formatDate(selectionRange[1])}</span>
          </TimeText>
        </React.Fragment>
      )
    }
  }

  const getAlias = (attribute: string) => {
    const { dateAttributeAliases } = props
    if (dateAttributeAliases && dateAttributeAliases[attribute]) {
      return dateAttributeAliases[attribute]
    } else {
      return attribute
    }
  }

  return (
    <Root ref={rootRef} width={width}>
      {props.data && (
        <div>
          <DateAttributeSelect
            onChange={(e: any) => setSelectedDateAttribute(e.target.value)}
            value={selectedDateAttribute}
          >
            {possibleDateAttributes.map((dateAttribute: string) => (
              <option value={dateAttribute}>{getAlias(dateAttribute)}</option>
            ))}
          </DateAttributeSelect>
        </div>
      )}

      {tooltip && (
        <Tooltip message={tooltip.message} x={tooltip.x} y={tooltip.y} />
      )}

      <svg ref={d3ContainerRef}>
        <g className="data-holder" />

        <rect ref={brushBarRef} className="brushBar" />

        {}
        <g ref={hoverLineRef} style={{ display: 'none' }}>
          <HoverLine x1="0" y1="0" x2="0" y2="50" />
        </g>

        {}
        <MarkerHover ref={leftMarkerRef}>
          <MarkerLine x1="0" y1="0" x2="0" y2="50" />
          <MarkerLine x1="0" y1="0" x2="0" y2="50" hidden={true} />
        </MarkerHover>
        <MarkerHover ref={rightMarkerRef}>
          <MarkerLine x1="0" y1="0" x2="0" y2="50" />
          <MarkerLine x1="0" y1="0" x2="0" y2="50" hidden={true} />
        </MarkerHover>

        {}
        <g className="axis axis--x" id="axis">
          <rect
            width={width}
            height={AXIS_HEIGHT + 20}
            fillOpacity="0"
            fill="black"
          />
        </g>
      </svg>

      <ContextRow>
        {renderContext()}
        <ButtonArea>
          <Button color="secondary" onClick={() => zoomOut()} icon>
            -
          </Button>
          <Button color="secondary" onClick={() => zoomIn()} icon>
            +
          </Button>
          {props.onDone && props.mode && (
            <Button
              color="primary"
              onClick={() => {
                props.onDone && props.onDone(selectionRange)
                setSelectionRange([])
              }}
            >
              Done
            </Button>
          )}
        </ButtonArea>
      </ContextRow>
    </Root>
  )
}

export default Timeline
