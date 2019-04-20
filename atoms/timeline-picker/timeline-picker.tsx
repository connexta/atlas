import * as React from 'react'
import * as d3 from 'd3'
import styled from '../../styled'
import RemoveCircle from '@material-ui/icons/DeleteForeverTwoTone'

type Mode = 'single' | 'range'

type Props = {
  onChange?: (value: string) => any
  mode: Mode
}

type State = {
  width: any
  height: any
  xAxis: any
  yAxis: any
  xScale: any
  yScale: any
  start: any
  startCoord: any
  end: any
}

const Root = styled<State, 'div'>('div')`
  display: block;
  cursor: pointer;

  .remove {
    cursor: pointer;
    display: ${props => (props.start ? 'block' : 'none')};
  }
`
const Y_VALUE = 0
const SVG_HEIGHT = 100
const margin = { top: 20, right: 20, bottom: 30, left: 40 }

const xAxisScale = () => {
  return {
    min: new Date('2019-04-18T21:46:14.642Z'),
    max: new Date('2019-04-20T21:46:14.642Z'),
  }
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
      start: undefined,
      startCoord: undefined,
      end: undefined,
    }
  }
  componentDidUpdate() {
    if (this.state.start && this.d3Refs.hover.line) {
      d3.select(this.d3Refs.hover.line.current as any)
        .attr(
          'transform',
          `translate(${this.state.xScale(this.state.start)}, 0)`
        )
        .attr('style', 'display: block')
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
      <Root {...this.state}>
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
          <g transform={'translate(' + margin.left + ',' + margin.top + ')'}>
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
                  stroke: 'rgba(0, 0, 0, 0.2)',
                  strokeWidth: '2',
                }}
              />
              <RemoveCircle
                onClick={e => {
                  this.setState({
                    start: undefined,
                  })
                  //   e.currentTarget.style.display = 'none'
                }}
                component="g"
                className="remove"
                transform="translate(-12, 70)"
                viewBox=""
              />
            </g>
            <g className="hover-value">
              <text x="0" y="0" ref={this.d3Refs.hover.value as any} />
            </g>
            <g className="axis--x" transform={'translate(0,' + height + ')'} />
            <g className="axis--y" display="none" />
          </g>
        </svg>
      </Root>
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
        start: value,
        startCoord: coord[0],
      })
      if (that.props.onChange) {
        that.props.onChange(value.toISOString())
      }
      d3.select(that.d3Refs.hover.line.current as any)
        .select('circle')
        .attr('style', 'display: block')
    })

    d3.select(this.d3Refs.root.current as any).on('mousemove', function() {
      if (that.state.start) {
        return
      }
      const coord = d3.mouse(this.querySelector('g'))
      d3.select(that.d3Refs.hover.line.current as any)
        .attr('transform', `translate(${coord[0]}, 0)`)
        .attr('style', 'display: block')
      d3.select(that.d3Refs.hover.value.current as any).text(
        that.state.xScale.invert(coord[0])
      )
    })
  }
  d3Refs = {
    root: React.createRef(),
    hover: {
      line: React.createRef(),
      value: React.createRef(),
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
    const x = d3.scaleTime().range([0, width])
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
    const yAxis = d3.axisLeft(y)
    this.setState({
      xScale: x,
      yScale: y,
      xAxis,
      yAxis,
    })

    d3.select('.axis--x').call(xAxis)
    d3.select('.axis--y').call(yAxis)

    const zoomMin = 1
    const zoomMax = (xAxisMax.getTime() - xAxisMin.getTime()) / (1000 * 60)

    const zoom = d3
      .zoom()
      .scaleExtent([zoomMin, zoomMax])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on('zoom', this.onZoom)

    const timelineContainer = d3.select('.timeline') as d3.Selection<
      SVGSVGElement,
      {},
      HTMLElement,
      any
    >

    // TODO: try and use onZoom here instead
    this.zoomIn = () => {
      zoom.scaleBy(timelineContainer.transition().duration(500), 2)
    }

    // TODO: try and use onZoom here instead
    this.zoomOut = () => {
      zoom.scaleBy(timelineContainer.transition().duration(500), 0.5)
    }

    d3.select('.timeline')
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
    const timelineContainer = d3.select('.timeline')
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
    // @ts-ignore
    const yAxis = d3.axisLeft(newYScale)

    d3.select('.axis--x').call(xAxis.scale(newXScale))
    d3.select('.axis--y').call(yAxis.scale(newYScale))

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
