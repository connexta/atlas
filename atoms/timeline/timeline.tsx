import * as d3 from 'd3'
// @ts-ignore
import moment from 'moment-timezone'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
// import Button from '../button'
import { Tooltip } from './tooltip'
import { convertDateToTimezoneDate, Data, range, toUtc } from './util'
import styled from '../../styled'

// Constants
const AXIS_MARGIN = 20
const AXIS_HEIGHT = 15

// Color Theme
const TEXT_COLOR = '#d6d6d8'
const PRIMARY_COLOR = '#2a616a'

const ContextRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

const HoverLine = styled.line`
  stroke: #30a6ad;
  stroke-width: 3;
  pointer-events: none;
`
const MarkerHover = styled.g`
  :hover {
    cursor: ew-resize;
  }
`
const MarkerLine = styled.line`
  stroke: ${(props: any) => (!props.hidden ? '#30a6ad' : 'rgba(0, 0, 0, 0)')};
  stroke-width: ${(props: any) => (!props.hidden ? 2 : 30)};
`
const SVG = styled.svg`
  /* no-op */
`

const BUTTON_SECONDARY_COLOR = '#25404a'
const BUTTON_PRIMARY_COLOR = '#31a6ad'
const Button = styled.button`
  display: flex;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  color: white;
  min-width: 3rem;
  height: 3rem;
  border: 1px solid #2e5860;

  background-color: ${(props: any) =>
    props.color === 'primary' ? BUTTON_PRIMARY_COLOR : BUTTON_SECONDARY_COLOR};
  font-size: ${(props: any) => (props.icon ? '2rem' : '1rem')};
  padding: ${(props: any) => (props.icon ? '' : '0px 20px')};
  margin-left: ${(props: any) => (props.icon ? '' : '15px !important')};

  :hover {
    border: 1px solid #31a6ad;
  }

  :focus {
    outline: none;
  }
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
  width: ${(props: any) => props.width}px;

  .areaMarker {
    fill: #30a6ad;
    opacity: 0.1;
    display: none;

    /* pointer-events: none; This will let you select/hover records behind area, but can't brush-drag area if it's set. */

    :hover {
      cursor: move;
      fill: #30a6ad;
      opacity: 0.5;
    }
  }

  .axis {
    color: ${TEXT_COLOR};
    font-size: 0.9rem;
  }

  .selected {
    fill: #31a6ad !important;
  }

  .data {
    fill: #3a4a54;
    :hover {
      stroke-width: 2px;
      stroke: ${PRIMARY_COLOR};
      /* fill: #a1a1a1; */
      /* box-shadow: 'rgba(42, 97, 106, 1)'; */
      /* box-shadow: 10px 10px 10px #2a616a; */
      /* filter: drop-shadow(3px 3px 2px rgba(255, 255, 255, 0.7)); */
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

// Types
interface TimelineProps {
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

  onDone?: () => void

  onSelect?: (ids: string[]) => void

  mode?: 'single' | 'range'
}

type Bucket = {
  x1: number
  x2: number
  selected: boolean
  data: string[]
}

type Tooltip = {
  x: number
  y: number
  message: string | any
}

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

const formatDate = (value: Date) =>
  moment(value).format('DD MMMM YYYY h:mm a Z')

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

/*
 * TODOS
 * --------------------
 *
 * 2. All x/y position translations should be dynamic based on height/width
 *
 * 4. On hover should work when the on hover is behind the area marker.
 */

// Please see https://alignedleft.com/tutorials/d3/scales for more information about d3 scales.
export const Timeline = (props: TimelineProps) => {
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

  const [width] = useState(1425)
  const [height] = useState(300)

  const [dataBuckets, setDataBuckets] = useState<Bucket[]>([])
  const [tooltip, setTooltip] = useState<Tooltip | null>()
  // const [dragStart, setDragStart] = useState<number | null>(null)

  const [xScale, setXScale] = useState(() => getInitialTimeScale(width))
  const [xAxis, setXAxis] = useState(() =>
    d3.axisBottom(xScale).tickSize(AXIS_HEIGHT)
  )

  const initialX = getInitialTimeScale(width)
  const markerHeight = height - 70 - AXIS_HEIGHT

  /**
   * When a zoom event is triggered, use the transform event to create a new xScale,
   * then create a new xAxis using the scale and update existing xAxis
   */
  const handleZoom = () => {
    // Tooltip sticks around without this.
    setTooltip(null)

    const transform = d3.event.transform

    // Returns a copy of the continuous scale x whose domain is transformed.
    const newXScale = transform.rescaleX(initialX)
    setXScale(() => newXScale)

    const newXAxis = xAxis.scale(newXScale)
    setXAxis(() => newXAxis)

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
    d3
      .drag()
      .on('start', () => {
        hideElement(d3.select(hoverLineRef.current))
      })
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

        const originalTimeScale = getInitialTimeScale(width)

        if (
          originalTimeScale.domain()[0] < newLeftDate &&
          newRightDate < originalTimeScale.domain()[1]
        ) {
          props.onChange([newLeftDate, newRightDate])
        }
      })

  /**
   *
   * Selection Drag does two things:
   * 1. When the user drags across the timeline, a range selection will be created.
   * 2. If the drag event is only 150ms or less from start to finish AND ends on a rect object,
   * assume that the user meant to click instead of drag, and properly trigger a click action on the rect.
   *
   * @param currentValues
   * @param currentDataBuckets
   */
  const getSelectionDrag = (
    currentValues: Date[],
    currentDataBuckets: Bucket[]
  ) => {
    let dragStart: number
    const CLICK_TIMEOUT_MS = 150
    return d3
      .drag()
      .on('start', () => {
        hideElement(d3.select(hoverLineRef.current))
        dragStart = d3.event.sourceEvent.timeStamp
        const value = d3.event.x
        const newLeftDate = convertDateToTimezoneDate(
          xScale.invert(value),
          props.timezone
        )
        props.onChange([newLeftDate])
      })
      .on('end', () => {
        const sourceEvent = d3.event.sourceEvent
        if (sourceEvent.timeStamp - dragStart < CLICK_TIMEOUT_MS) {
          const nodeName = sourceEvent.srcElement.nodeName
          if (nodeName !== 'svg') {
            const x = d3.event.x
            const bucket = currentDataBuckets.find(b => b.x1 < x && x <= b.x2)
            props.onSelect && props.onSelect(bucket!.data)
            console.debug(
              `Drag event under ${CLICK_TIMEOUT_MS}ms detected, registering as click and clearing selection to empty array`
            )
            props.onChange([])
          }
          return
        }

        // const diff = d3.event.x - d3.event.subject.x
        // props.onChange([newLeftDate])
      })
      .on('drag', () => {
        const diff = d3.event.x - d3.event.subject.x
        console.log('Diff: ', diff)
        // const value = d3.event.x
        // console.log('Drag event diff: ', diff)

        const currentLeft = xScale(currentValues[0])

        let currentRight
        if (currentValues[1] == undefined) {
          currentRight = currentLeft
        } else {
          currentRight = xScale(currentValues[1])
        }

        const newRight = currentRight + diff
        // const newRight = currentRight + value

        const newRightDate = convertDateToTimezoneDate(
          xScale.invert(newRight),
          props.timezone
        )

        props.onChange([currentValues[0], newRightDate])

        // const newRightDate = convertDateToTimezoneDate(
        //   xScale.invert(newRight),
        //   props.timezone
        // )

        // const originalTimeScale = getInitialTimeScale(width)

        // if (
        //   originalTimeScale.domain()[0] < newLeftDate &&
        //   newRightDate < originalTimeScale.domain()[1]
        // ) {
        //   props.onChange([newLeftDate, newRightDate])
        // }
      })
  }

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

  useEffect(() => {
    if (d3ContainerRef.current) {
      renderInitialXAxis()

      const container = d3.select(d3ContainerRef.current)

      //@ts-ignore
      container.call(zoomBehavior).on('mousedown.zoom', () => null) // Remove mousedown.zoom trigger to disable panning so we can create a drag behavior
    }
  }, [])

  // Add click handlers to listen to d3 mouse events
  // Note: Can't use arrow functions when detecting d3.mouse events because we don't want 'this' auto bound
  useEffect(() => {
    // const INTERNAL_DATE_FORMAT = 'YYYY/MM/DD HH:mm:mm'
    // if (props.selectionRange !== undefined) {
    //   //   // When the d3Container click event triggers, set the selectionRange
    //   d3.select(d3ContainerRef.current).on('click', function() {
    //     // TODO: Clicking the data should supercede this click action.
    //     const coord = d3.mouse(this as any)
    //     const value = xScale.invert(coord[0])
    //     const convertedTimezoneValue = convertDateToTimezoneDate(
    //       value,
    //       props.timezone
    //     )
    //     props.onChange([convertedTimezoneValue])
    //   })
    // }
    //     // If values are not provided, first click will create a new range at +/- 1 year from the click point
    //     if (props.selectionRange.length === 0) {
    //       const left = moment(
    //         convertedTimezoneValue,
    //         INTERNAL_DATE_FORMAT
    //       ).subtract(365, 'days')
    //       const right = moment(
    //         convertedTimezoneValue,
    //         INTERNAL_DATE_FORMAT
    //       ).add(365, 'days')
    //       props.onChange([left, right])
    //     } else {
    //       // Uncomment to enable click based range extension
    //       // if (convertedTimezoneValue < props.selectionRange[0]) {
    //       //   props.onChange([convertedTimezoneValue, props.selectionRange[1]])
    //       // } else if (props.selectionRange[1] < convertedTimezoneValue) {
    //       //   props.onChange([props.selectionRange[0], convertedTimezoneValue])
    //       // }
    //     }
    //   })
    // }
  }, [xScale, props.selectionRange, props.timezone])

  // Add mouse handlers to listen to d3 mouse events
  useEffect(() => {
    // When the d3Container mousemove event triggers, show the hover line
    d3.select(d3ContainerRef.current).on('mousemove', function() {
      const coord = d3.mouse(this as any)
      d3.select(hoverLineRef.current)
        .attr('transform', `translate(${coord[0]}, ${markerHeight})`)
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
      selected: false,
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

        // const isSelected = inSelectionRange(
        //   scaledDate,
        //   props.selectionRange.map(r => xScale(r))
        // )

        for (let i = 0; i < buckets.length; i++) {
          const b = buckets[i]
          if (b.x1 < scaledDate && scaledDate < b.x2) {
            b.data.push(d.id)
            if (d.selected) {
              b.selected = true
            }
            break
          }
        }
      })

      setDataBuckets(buckets)

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
      .on('click', function() {
        //@ts-ignore
        const id = d3.select(this).node().id
        props.onSelect && props.onSelect(dataBuckets[id].data)
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
          message: generateTooltipMessage(dataBuckets[id].data),
        })
      })
  }, [dataBuckets])

  useEffect(() => {
    d3.select(d3ContainerRef.current).call(
      // @ts-ignore
      getSelectionDrag(props.selectionRange, dataBuckets)
    )
  }, [dataBuckets])

  // When the selection range is changed or the scale changes, update the markers and drag behaviors
  useEffect(() => {
    if (props.selectionRange.length !== 0) {
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
            .attr('transform', `translate(${xScale(leftUtc)}, ${markerHeight})`)
            .attr('style', 'display: block')

          rightMarker
            .attr(
              'transform',
              `translate(${xScale(rightUtc)}, ${markerHeight})`
            )
            .attr('style', 'display: block')

          areaMarker
            .attr('transform', `translate(${xScale(leftUtc)},${markerHeight})`)
            .attr('width', xScale(rightUtc) - xScale(leftUtc))
            .attr('height', '50')
            .attr('style', 'display: block')
        } else if (leftMarkerRef.current) {
          const leftMarker = d3.select(leftMarkerRef.current)
          const leftUtc = toUtc(props.selectionRange[0])
          // console.log('Left UTC:', leftUtc)
          leftMarker
            .attr('transform', `translate(${xScale(leftUtc)}, ${markerHeight})`)
            .attr('style', 'display: block')
        } else {
          hideElement(leftMarker)
          hideElement(rightMarker)
          hideElement(areaMarker)
        }
      }
    }
  }, [xScale, props.selectionRange])

  const renderContext = () => {
    if (props.mode === 'single') {
      if (!props.selectionRange[0]) {
        return (
          <Message>Click to select a time. Zoom with the scroll wheel.</Message>
        )
      } else {
        return (
          <TimeText>
            <b>Time</b>
            <br />
            <span>
              {props.selectionRange[0] && formatDate(props.selectionRange[0])}
            </span>
          </TimeText>
        )
      }
    } else if (props.mode === 'range') {
      if (!props.selectionRange[0]) {
        return (
          <Message>
            Click to select a start time. Zoom with the scroll wheel.
          </Message>
        )
      }
      return (
        <React.Fragment>
          <TimeText>
            <b>Start</b>
            <br />
            <span>
              {props.selectionRange[0] && formatDate(props.selectionRange[0])}
            </span>
          </TimeText>
          <TimeText>
            <b>End</b>
            <br />
            <span>
              {props.selectionRange[1] && formatDate(props.selectionRange[1])}
            </span>
          </TimeText>
        </React.Fragment>
      )
    } else if (props.selectionRange.length === 0) {
      return (
        <Message>
          Click to select a cluster of results. Zoom with the scroll wheel.
        </Message>
      )
    } else {
      return (
        <React.Fragment>
          <TimeText>
            <b>Start</b>
            <br />
            <span>{formatDate(props.selectionRange[0])}</span>
          </TimeText>
          <TimeText>
            <b>End</b>
            <br />
            <span>{formatDate(props.selectionRange[1])}</span>
          </TimeText>
        </React.Fragment>
      )
    }
  }

  return (
    <Root width={width}>
      <ButtonArea />

      {tooltip && (
        <Tooltip message={tooltip.message} x={tooltip.x} y={tooltip.y} />
      )}

      <SVG ref={d3ContainerRef}>
        <g className="data-holder" />

        <rect ref={areaMarkerRef} className="areaMarker" />

        {/* Vertical line showing the current hover position */}
        <g ref={hoverLineRef} style={{ display: 'none' }}>
          <HoverLine x1="0" y1="0" x2="0" y2="50" />
        </g>

        {/* Lines that appear upon clicking on the timeline and creating a selection range */}
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
      <ContextRow>
        {renderContext()}
        <ButtonArea>
          <Button color="secondary" onClick={() => zoomOut()} icon>
            -
          </Button>
          <Button color="secondary" onClick={() => zoomIn()} icon>
            +
          </Button>
          {props.onDone && (
            <Button color="primary" onClick={props.onDone}>
              Done
            </Button>
          )}
        </ButtonArea>
      </ContextRow>
    </Root>
  )
}

export default Timeline
