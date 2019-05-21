import * as React from 'react'
import * as d3 from 'd3'
import Button from '../button'
import styled from '../../styled'

const clustering = require('density-clustering')

export type Point = {
  id: string
  date: Date
  selected: boolean
  data?: any
}

type CoordinatePoint = {
  cx: number
  cy: number
  point: Point
}

type OnClick = (point: Point[]) => void
type OnHover = (points: Point[]) => any

type Props = {
  className?: string
  style?: {}
  children?: any
  value: Point[]
  onClick?: OnClick
  onHover?: OnHover
  Tooltip?: any
}

type DBSCAN = {
  new (): DBSCAN
  run: (dataset: number[][], radius: any, amount: any) => number[][]
}

type clustering = {
  DBSCAN: DBSCAN
}

type ClusterPoint = {
  cx: number
  cy: number
  radius: number
  points: Point[]
  selected: boolean
}

const dbscan = new clustering.DBSCAN()
const POINT_RADIUS = 7
const CLUSTER_RADIUS = POINT_RADIUS * 2
const CLUSTER_NEIGHBOR_RADIUS = CLUSTER_RADIUS
const POINTS_TO_FORM_CLUSTER = 2
const Y_VALUE = 0
const SVG_HEIGHT = 300

const xAxisScale = (points: Point[]) => {
  const dates = points.map(p => p.date.getTime())
  const min = Math.min(...dates)
  const max = Math.max(...dates)
  const offset = (max - min) * 0.05
  return {
    min: new Date(min - offset),
    max: new Date(max + offset),
  }
}

const createClusterPoint = (points: any[]): ClusterPoint => {
  const pointCxs: number[] = points.map(p => p.cx)
  const max = Math.max(...pointCxs)
  const min = Math.min(...pointCxs)
  const radius = (max - min + 2 * POINT_RADIUS) / 2
  const cx = min - POINT_RADIUS + radius

  // All points are on the y axis, no need to take average
  const cy = points[0].cy
  return {
    cx,
    cy,
    radius,
    points: points.map(p => p.point),
    selected: points.every(p => p.point.selected),
  }
}

const isPointInCluster = (clusters: ClusterPoint[], point: Point): boolean => {
  return clusters.some(cluster => {
    return cluster.points.map(p => p.id).indexOf(point.id) > -1
  })
}

// const Circles = React.memo(({ points, onClick, onHover, margin }: any) => {
const Circles = ({ points, onClick, onHover, margin }: any) => {
  // results are clusters of indices relating to array of coordiantes passed in
  const clusters = dbscan.run(
    points.map((p: any) => [p.cx, p.cy]),
    CLUSTER_NEIGHBOR_RADIUS,
    POINTS_TO_FORM_CLUSTER
  ) as number[][]

  const newClusterPoints = clusters
    .filter(cluster => cluster.length > 1)
    .map(cluster => cluster.map(i => points[i]))
    .map(points => createClusterPoint(points))

  const handleHover = (points: Point[]) => (e: any) => {
    onHover({ x: e.pageX, y: e.pageY, points })
  }
  const transform = 'translate(' + -margin.left + ',0)'
  const pointIdsInCluster: string[] = []

  return (
    <>
      {newClusterPoints.map((cluster: ClusterPoint, i: number) => {
        pointIdsInCluster.push(...cluster.points.map(p => p.id))
        const rectX =
          cluster.cx -
          5 -
          (cluster.points.length.toString().length / 2) * 10 +
          'px'
        const rectY = 30 + cluster.cy - 16 + 'px'
        const rectWidth = cluster.points.length.toString().length * 10 + 10
        const rectHeight = 20

        const textX =
          cluster.cx - (cluster.points.length.toString().length * 10) / 2 + 'px'
        const textY = 30 + cluster.cy + 'px'

        const selectedClusterProps = cluster.selected
          ? {
              stroke: 'black',
              strokeWidth: '3px',
              strokeOpacity: '100%',
            }
          : {}

        const props = {
          transform,
          onMouseMove: handleHover(cluster.points),
          onMouseOut: () => onHover([]),
          onClick: () => onClick(cluster.points),
        }

        return (
          <React.Fragment key={i}>
            <circle
              fill="grey"
              fillOpacity="0.25"
              cx={cluster.cx}
              cy={cluster.cy}
              r={cluster.radius}
              {...props}
              {...selectedClusterProps}
            />
            <rect
              fill="black"
              x={rectX}
              y={rectY}
              width={rectWidth}
              height={rectHeight}
              {...props}
            />
            <rect
              fill="black"
              x={cluster.cx - 1 + 'px'}
              y={15 + cluster.cy - 16 + 'px'}
              width={2}
              height={15}
              {...props}
            />
            <text fill="white" x={textX} y={textY} fontSize="20" {...props}>
              {cluster.points.length}
            </text>
          </React.Fragment>
        )
      })}
      {points.map((point: any, i: number) => {
        var selectedClusters = newClusterPoints.filter(
          cluster => cluster.selected
        )
        var selectedCircleProps = {}

        if (
          point.point.selected &&
          !isPointInCluster(selectedClusters, point.point)
        ) {
          selectedCircleProps = {
            stroke: 'black',
            strokeWidth: '3px',
            strokeOpacity: '100%',
          }
        }

        return (
          <circle
            key={i}
            fill="gray"
            fillOpacity="0.25"
            cx={point.cx}
            cy={point.cy}
            r={POINT_RADIUS}
            transform={transform}
            onMouseMove={handleHover([point.point])}
            onMouseOut={() => onHover([])}
            onClick={() => {
              console.log(JSON.stringify(point.point))
              onClick([point.point])
            }}
            {...selectedCircleProps}
          />
        )
      })}
    </>
  )
}

const margin = { top: 20, right: 20, bottom: 30, left: 40 }

type TooltipState = {
  x: number
  y: number
  points: Point[]
}

type State = {
  width: number
  height: number
  points: CoordinatePoint[]
  tooltip: TooltipState | undefined
  resizeToggle: boolean
}

class Timeline extends React.Component<Props, State> {
  d3Ref = React.createRef()
  view: any = null
  constructor(props: Props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      points: [],
      tooltip: undefined,
      resizeToggle: false,
    }
  }
  onHover = (e: any) => {
    const { x, y, points = [] } = e
    if (points.length === 0) {
      this.setState({ tooltip: undefined })
    } else {
      this.setState({ tooltip: { x, y, points } })
    }
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

    const points = this.props.value.map(point => {
      const cx = newXScale(point.date)
      const cy = newYScale(Y_VALUE)
      return { cx, cy, point }
    })

    this.setState({ points })
  }
  zoomIn() {}
  zoomOut() {}
  initD3() {
    if (this.d3Ref.current === null) {
      return
    }
    const { width, height } = (this.d3Ref
      .current as any).getBoundingClientRect()

    this.setState({ width, height })

    const x = d3.scaleTime().range([0, width])
    const y = d3.scaleLinear().range([height, 0])

    // @ts-ignore
    this.x = x
    // @ts-ignore
    this.y = y

    // setup axises
    const range = xAxisScale(this.props.value)
    const xAxisMin = range.min
    const xAxisMax = range.max

    x.domain([xAxisMin, xAxisMax])
    y.domain([0, Y_VALUE])

    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y)

    d3.select('.axis--x').call(xAxis)
    d3.select('.axis--y').call(yAxis)

    const points = this.props.value.map(point => {
      const cx = x(point.date)
      const cy = y(Y_VALUE)
      return { cx, cy, point }
    })

    this.setState({ points })

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

  onResize = () => {
    this.initD3()
    this.setState({ resizeToggle: !this.state.resizeToggle })
  }

  componentDidMount() {
    this.initD3()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  render() {
    const width = this.state.width - margin.left - margin.right
    const height = SVG_HEIGHT - margin.top - margin.bottom
    const { Tooltip = (points: Point[]) => <div /> } = this.props

    return (
      <div
        style={{ position: 'relative', width: '100%' }}
        className={this.props.className}
      >
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            // button + button {
            //   margin-left: 10px;
            // }
          }}
        >
          <Button onClick={this.zoomIn} emphasis="medium">
            +
          </Button>
          <Button onClick={this.zoomOut} emphasis="medium">
            -
          </Button>
        </div>
        <div style={{ flexDirection: 'column', width: '100%' }}>
          {(this as any).state.tooltip !== undefined ? (
            <div
              className="tooltip"
              style={{
                fillOpacity: 0.9,
                position: 'fixed',
                left: (this as any).state.tooltip.x,
                top: (this as any).state.tooltip.y + 50,
                pointerEvent: 'none',
              }}
            >
              <Tooltip
                points={
                  this.state.tooltip === undefined
                    ? []
                    : this.state.tooltip.points
                }
              />
            </div>
          ) : null}
          <svg
            ref={this.d3Ref as any}
            className="timeline"
            height={SVG_HEIGHT}
            style={{ width: '100%' }}
          >
            {width <= 0 ? null : (
              <>
                <defs>
                  <clipPath className="clip">
                    <rect width={width} height={height} />
                  </clipPath>
                </defs>
                <g
                  transform={
                    'translate(' + margin.left + ',' + margin.top + ')'
                  }
                >
                  <g clipPath="url(.clip)">
                    <Circles
                      points={this.state.points}
                      margin={margin}
                      onClick={this.props.onClick}
                      onHover={this.onHover}
                    />
                  </g>
                  <g
                    className="axis--x"
                    transform={'translate(0,' + height + ')'}
                  />
                  <g className="axis--y" display="none" />
                </g>
              </>
            )}
          </svg>
        </div>
      </div>
    )
  }
}
export default Timeline
