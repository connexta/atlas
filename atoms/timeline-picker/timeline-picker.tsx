import * as React from 'react'
import * as d3 from 'd3'
const moment = require('moment-timezone')

type Mode = 'single' | 'range'

type Props = {
  onChange?: (value: string) => any
  onHover?: (value: string) => any
  onMouseLeave?: () => any
  mode: Mode
  tickFormat?: (value: string) => string
  ticks?: number
  timezone?: string
  format?: string
  hoverColor: string
  value?: string
}

type State = {
  width: any
  height: any
  xAxis: any
  yAxis: any
  xScale: any
  yScale: any
  value: any
}

const Y_VALUE = 0
const SVG_HEIGHT = 100
const margin = { top: 20, right: 20, bottom: 30, left: 40 }

const xAxisScale = () => {
  return {
    min: new Date('1980-04-18T21:46:14.642Z'),
    max: new Date('2019-04-20T21:46:14.642Z'),
  }
}

const adjustValueToTimeZone = (
  value: Date,
  timezone?: string,
  format?: string
) => {
  const momentValue = moment.tz(value, timezone)
  const utcOffsetMinutes = momentValue.utcOffset()
  return momentValue.subtract(utcOffsetMinutes, 'minutes').format(format)
  // if (utcOffsetMinutes < 0) {
  //   return momentValue.subtract(utcOffsetMinutes, 'minutes').format(format)
  // } else if (utcOffsetMinutes > 0) {
  //   return momentValue.subtract(utcOffsetMinutes, 'minutes').format(format)
  // }
  // return momentValue.format(format)
}

const adjustIncomingValueToUTC = (value: string, timezone?: string) => {
  const momentValue = moment.tz(value, timezone)
  const utcOffsetMinutes = momentValue.utcOffset()
  return momentValue.add(utcOffsetMinutes, 'minutes').toDate()
}

class TimelinePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      xAxis: undefined,
      yAxis: undefined,
      xScale: undefined,
      yScale: undefined,
      value: props.value
        ? adjustIncomingValueToUTC(props.value, props.timezone)
        : undefined,
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value
          ? adjustIncomingValueToUTC(this.props.value, this.props.timezone)
          : undefined,
      })
    }
    if (this.d3Refs.value.marker.current) {
      if (this.state.value) {
        d3.select(this.d3Refs.value.marker.current as any)
          .attr(
            'transform',
            `translate(${this.state.xScale(this.state.value)}, 0)`
          )
          .attr('style', 'display: block')
      } else {
        d3.select(this.d3Refs.value.marker.current as any).attr(
          'style',
          'display: none'
        )
      }
    }
  }

  componentDidMount() {
    this.renderD3()
    this.attachD3Event()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
  render() {
    const width = this.state.width - margin.left - margin.right
    const height = SVG_HEIGHT - margin.top - margin.bottom
    return (
      <div>
        <svg
          ref={this.d3Refs.root as any}
          className="timeline"
          height={SVG_HEIGHT}
          style={{ width: '100%', overflow: 'visible' }}
        >
          <defs>
            <clipPath className="clip">
              <rect width={width} height={height} />
            </clipPath>
          </defs>
          <g>
            <g
              className="hover-line"
              ref={this.d3Refs.hover.line as any}
              style={{ display: 'none' }}
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="70"
                style={{
                  stroke: this.props.hoverColor,
                  strokeWidth: '2',
                }}
              />
            </g>
            <g
              className="value-marker"
              ref={this.d3Refs.value.marker as any}
              style={{ display: 'none' }}
            >
              <line
                x1="10"
                y1="20"
                x2="-10"
                y2="50"
                style={{
                  stroke: this.props.hoverColor,
                  strokeWidth: '2',
                }}
              />
              <line
                x1="-10"
                y1="20"
                x2="10"
                y2="50"
                style={{
                  stroke: this.props.hoverColor,
                  strokeWidth: '2',
                }}
              />
            </g>
            <g
              className="axis--x"
              transform={'translate(0,' + height + ')'}
              style={{
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            />
            <g className="axis--y" display="none" />
          </g>
        </svg>
      </div>
    )
  }
  attachD3Event() {
    if (
      this.d3Refs.root.current === null ||
      this.d3Refs.hover.line.current === null
    ) {
      return
    }
    const that = this
    d3.select(this.d3Refs.root.current as any).on('click', function() {
      const coord = d3.mouse(this.querySelector('g'))
      const value = that.state.xScale.invert(coord[0])
      that.setState({
        value,
      })
      if (that.props.onChange) {
        that.props.onChange(
          adjustValueToTimeZone(value, that.props.timezone, that.props.format)
        )
      }
    })

    d3.select(this.d3Refs.root.current as any).on('mousemove', function() {
      const coord = d3.mouse(this.querySelector('g'))
      const value = that.state.xScale.invert(coord[0])
      d3.select(that.d3Refs.hover.line.current as any)
        .attr('transform', `translate(${coord[0]}, 0)`)
        .attr('style', 'display: block')
      if (that.props.onHover) {
        that.props.onHover(
          adjustValueToTimeZone(value, that.props.timezone, that.props.format)
        )
      }
    })
    d3.select(this.d3Refs.root.current as any).on('mouseleave', function() {
      if (that.props.onMouseLeave) {
        that.props.onMouseLeave()
      }
    })
  }
  d3Refs = {
    root: React.createRef(),
    hover: {
      line: React.createRef(),
    },
    value: {
      marker: React.createRef(),
    },
  }
  onResize = () => {
    this.renderD3()
  }
  renderD3 = () => {
    if (this.d3Refs.root.current === null) {
      return
    }
    const { width, height } = (this.d3Refs.root
      .current as any).getBoundingClientRect()
    this.setState({ width, height })
    const x = d3.scaleUtc().range([0, width])
    const y = d3.scaleLinear().range([height, 0])

    // @ts-ignore
    this.x = x
    // @ts-ignore
    this.y = y

    // setup axises
    const range = xAxisScale()
    const xAxisMin = range.min
    const xAxisMax = range.max

    x.domain([xAxisMin, xAxisMax])
    y.domain([0, Y_VALUE])

    const xAxis = d3.axisBottom(x)
    if (this.props.tickFormat) {
      // @ts-ignore
      xAxis.tickFormat(this.props.tickFormat)
    }
    if (this.props.ticks) {
      xAxis.ticks(this.props.ticks)
    }
    const yAxis = d3.axisLeft(y)
    this.setState({
      xScale: x,
      yScale: y,
      xAxis,
      yAxis,
    })

    d3.select(this.d3Refs.root.current as any)
      .select('.axis--x')
      .call(xAxis)
    d3.select(this.d3Refs.root.current as any)
      .select('.axis--y')
      .call(yAxis)

    const zoomMin = 1
    const zoomMax = (xAxisMax.getTime() - xAxisMin.getTime()) / (1000 * 60)

    const zoom = d3
      .zoom()
      .scaleExtent([zoomMin, zoomMax])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on('zoom', this.onZoom)

    //@ts-ignore
    const timelineContainer = d3.select(this.d3Refs.root
      .current as any) as d3.Selection<SVGSVGElement, {}, HTMLElement, any>

    // TODO: try and use onZoom here instead
    this.zoomIn = () => {
      zoom.scaleBy(timelineContainer.transition().duration(500), 2)
    }

    // TODO: try and use onZoom here instead
    this.zoomOut = () => {
      zoom.scaleBy(timelineContainer.transition().duration(500), 0.5)
    }

    d3.select(this.d3Refs.root.current as any)
      .call(zoom)
      .transition()
      .duration(1500)
      .call(
        zoom.transform as any,
        d3.zoomIdentity
          .scale(width / (x(xAxisMin) - x(xAxisMax)))
          .translate(-x(xAxisMin), 0)
      )
  }
  onZoom = () => {
    const timelineContainer = d3.select(this.d3Refs.root.current as any)
    let t = d3.zoomTransform(timelineContainer.node() as any)

    // TODO - No idea why k ends up being -1, this is a hacky fix :(
    //0 means nothing will display, -1 inverts
    if (t.k === -1) {
      // @ts-ignore
      t.k = 1
    }

    // @ts-ignore
    const newXScale = t.rescaleX(this.x)
    // @ts-ignore
    const newYScale = t.rescaleY(this.y)
    // @ts-ignore
    const xAxis = d3.axisBottom(newXScale)
    if (this.props.tickFormat) {
      xAxis.tickFormat(this.props.tickFormat)
    }
    if (this.props.ticks) {
      xAxis.ticks(this.props.ticks)
    }
    // @ts-ignore
    const yAxis = d3.axisLeft(newYScale)

    d3.select(this.d3Refs.root.current as any)
      .select('.axis--x')
      .call(xAxis.scale(newXScale))
    d3.select(this.d3Refs.root.current as any)
      .select('.axis--y')
      .call(yAxis.scale(newYScale))

    this.setState({
      xScale: newXScale,
      yScale: newYScale,
      xAxis,
      yAxis,
    })
  }
  zoomIn() {}
  zoomOut() {}
}

export default TimelinePicker
