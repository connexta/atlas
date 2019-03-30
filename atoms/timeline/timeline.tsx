import * as React from 'react'
import * as d3 from 'd3'
import Button from '../button'
import { renderToStaticMarkup } from 'react-dom/server'
import styled from '../../styled'

const clustering = require('density-clustering')

type result = number[][]

type DBSCAN = {
  new (): DBSCAN
  run: (dataset: number[][], radius: any, amount: any) => result
}

type clustering = {
  DBSCAN: DBSCAN
}

type Point = {
  date: Date
  data?: any
}

type D3Point = {
  svgElement: SVGCircleElement
  point: Point
  coordinates: number[]
}

type ClusterPoint = {
  cx: number
  cy: number
  radius: number
  points: Point[]
}

type OnClick = (point: Point[]) => void
type OnHover = (points: Point[]) => any

type Props = {
  className?: string
  style?: {}
  children?: any
  value: Point[]
  onClick: OnClick
  onHover: OnHover
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

const hideTooltip = () => {
  d3.select('.tooltip')
    .html('')
    .transition()
    .duration(500)
    .style('opacity', 0)
}

const displayTooltip = (format: (value: any) => JSX.Element | string) => {
  return function(value: any) {
    // @ts-ignore
    const [x, y] = d3.mouse(this)

    const toDisplay = format(value)
    const html = React.isValidElement(toDisplay)
      ? renderToStaticMarkup(toDisplay)
      : (toDisplay as string)

    const toolTip = d3.select('.tooltip')

    toolTip
      .transition()
      .duration(200)
      .style('opacity', 0.9)
      .style('display', 'inline')

    toolTip.html(html)
    toolTip.style('left', x + 'px')
    toolTip.style('top', y + 50 + 'px')
  }
}

const createClusterPoint = (d3Points: D3Point[]): ClusterPoint => {
  const pointCxs: number[] = d3Points.map(p => p.coordinates[0])
  const max = Math.max(...pointCxs)
  const min = Math.min(...pointCxs)
  const radius = (max - min + 2 * POINT_RADIUS) / 2
  const cx = min - POINT_RADIUS + radius

  // All points are on the y axis, no need to take average
  const cy = d3Points[0].coordinates[1]
  const points = d3Points.map(d3point => d3point.point)

  return { cx, cy, radius, points }
}

const draw = (
  data: Point[],
  parentRef: any,
  onHover: OnHover,
  onClick: OnClick
) => {
  //d3.selectAll('.timeline').remove()
  //d3.selectAll('.tooltip').remove()

  var timelineContainer = d3.select('.timeline') as d3.Selection<
    SVGSVGElement,
    {},
    HTMLElement,
    any
  >

  const timelineNode = timelineContainer.node()

  if (timelineNode === null) {
    return
  }

  const margin = { top: 20, right: 20, bottom: 30, left: 40 }
  const width =
    timelineNode.getBoundingClientRect().width - margin.left - margin.right
  const height = SVG_HEIGHT - margin.top - margin.bottom

  const content = timelineContainer
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  const pointsContainer = content
    .append('g')
    .attr('clip-path', 'url(#clip)')
    .classed('points_g', true)

  // setup axises
  const x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0])

  const xAxis = d3.axisBottom(x)
  const yAxis = d3.axisLeft(y)

  const range = xAxisScale(data)
  const xAxisMin = range.min
  const xAxisMax = range.max

  // setup data points
  var points = pointsContainer
    .selectAll('dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('fill', 'gray')
    .attr('opacity', '0.25')
    .attr('cx', d => {
      var cx = x(d.date)
      if (isNaN(cx)) {
        throw 'cy of point calculated as NaN'
      }
      return cx
    })
    .attr('cy', d => {
      var cy = y(Y_VALUE)
      if (isNaN(cy)) {
        throw 'cy of point calculated as NaN'
      }
      return cy
    })
    .attr('r', POINT_RADIUS)
    .attr('transform', 'translate(' + -margin.left + ',0)')
    .on('click', (p: Point) => onClick([p]))
    .on('mousemove', displayTooltip(p => onHover([p])))
    .on('mouseout', hideTooltip)

  // setup clustering
  const updateClusters = (
    d3Selections: d3.Selection<SVGCircleElement, Point, SVGGElement, {}>
  ) => {
    d3.selectAll('.cluster').remove()
    d3.selectAll('.cluster-text').remove()
    d3.selectAll('.cluster-background').remove()

    const d3Points: D3Point[] = []
    d3Selections.each((point, index, groups) => {
      const svgElement = groups[index]
      const cx = svgElement.getAttribute('cx') || '0'
      const cy = svgElement.getAttribute('cy') || '0'

      d3Points.push({
        point,
        svgElement,
        coordinates: [parseFloat(cx), parseFloat(cy)],
      })
    })

    //results are clusters of indices relating to array of coordiantes passed in
    var clusters = dbscan.run(
      d3Points.map(c => c.coordinates),
      CLUSTER_NEIGHBOR_RADIUS,
      POINTS_TO_FORM_CLUSTER
    ) as number[][]

    const newClusterPoints = clusters
      .filter(cluster => cluster.length > 1)
      .map(cluster => cluster.map(i => d3Points[i]))
      .map(createClusterPoint)

    pointsContainer
      .selectAll('clust')
      .data(newClusterPoints)
      .enter()
      .append('circle')
      .attr('class', 'cluster')
      .attr('fill', 'grey')
      .attr('opacity', '0.25')
      .attr('cx', c => c.cx + 'px')
      .attr('cy', c => c.cy + 'px')
      .attr('r', c => c.radius)
      .attr('transform', 'translate(' + -margin.left + ',0)')
      .on('click', cluster => onClick(cluster.points))
      .on('mousemove', displayTooltip(cluster => onHover(cluster.points)))
      .on('mouseout', hideTooltip)

    pointsContainer
      .selectAll('clust')
      .data(newClusterPoints)
      .enter()
      .append('rect')
      .attr('fill', 'black')
      .attr('class', 'cluster-background')
      .attr(
        'x',
        c => c.cx - 5 - (c.points.length.toString().length / 2) * 10 + 'px'
      )
      .attr('y', c => 30 + c.cy - 16 + 'px')
      .attr('width', c => c.points.length.toString().length * 10 + 10)
      .attr('height', c => 20)
      .attr('transform', 'translate(' + -margin.left + ',0)')
      .on('click', cluster => onClick(cluster.points))
      .on('mousemove', displayTooltip(cluster => onHover(cluster.points)))
      .on('mouseout', hideTooltip)

    pointsContainer
      .selectAll('clust')
      .data(newClusterPoints)
      .enter()
      .append('rect')
      .attr('fill', 'black')
      .attr('class', 'cluster-background')
      .attr('x', c => c.cx - 1 + 'px')
      .attr('y', c => 15 + c.cy - 16 + 'px')
      .attr('width', 2)
      .attr('height', 15)
      .attr('transform', 'translate(' + -margin.left + ',0)')
      .on('click', cluster => onClick(cluster.points))
      .on('mousemove', displayTooltip(cluster => onHover(cluster.points)))
      .on('mouseout', hideTooltip)

    pointsContainer
      .selectAll('clust')
      .data(newClusterPoints)
      .enter()
      .append('text')
      .attr('fill', 'white')
      .attr('class', 'cluster-text')
      .attr(
        'x',
        c => c.cx - (c.points.length.toString().length * 10) / 2 + 'px'
      )
      .attr('y', c => 30 + c.cy + 'px')
      .attr('font-size', 20)
      .attr('transform', 'translate(' + -margin.left + ',0)')
      .text(c => c.points.length)
      .on('click', cluster => onClick(cluster.points))
      .on('mousemove', displayTooltip(cluster => onHover(cluster.points)))
      .on('mouseout', hideTooltip)
  }

  //setup zoom
  var zoomMin = 1
  var zoomMax = (xAxisMax.getTime() - xAxisMin.getTime()) / (1000 * 60)

  var zoomed = () => {
    let t = d3.zoomTransform(timelineContainer.node() as any)

    // TODO - No idea why k ends up being -1, this is a hacky fix :(
    //0 means nothing will display, -1 inverts
    if (t.k === -1) {
      // @ts-ignore
      t.k = 1
    }

    const newXScale = t.rescaleX(x)
    const newYScale = t.rescaleY(y)
    content.select('.axis--x').call(xAxis.scale(newXScale))
    content.select('.axis--y').call(yAxis.scale(newYScale))

    points
      .attr('cx', d => {
        const cx = newXScale(d.date)
        if (isNaN(cx)) {
          throw 'cx of point calculated as NaN when rescaling axises'
        }
        return margin.left + cx
      })
      .attr('cy', d => {
        const cy = newYScale(Y_VALUE)
        if (isNaN(cy)) {
          throw 'cy of point calculated as NaN when rescaling axises'
        }
        return cy
      })

    updateClusters(points)
  }

  const zoom = d3
    .zoom()
    .scaleExtent([zoomMin, zoomMax])
    .translateExtent([[0, 0], [width, height]])
    .extent([[0, 0], [width, height]])
    .on('zoom', zoomed)

  timelineContainer
    .call(zoom)
    .transition()
    .duration(1500)
    .call(
      zoom.transform,
      d3.zoomIdentity
        .scale(width / (x(xAxisMin) - x(xAxisMax)))
        .translate(-x(xAxisMin), 0)
    )

  updateClusters(points)

  return {
    zoomIn() {
      zoom.scaleBy(timelineContainer.transition().duration(500), 2)
    },
    zoomOut() {
      zoom.scaleBy(timelineContainer.transition().duration(500), 0.2)
    },
  }
}

const Root = styled.div`
  position: relative;
`

const ZoomArea = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  button + button {
    margin-left: 10px;
  }
`

type State = {
  width: number
  height: number
  points: any[]
}

const Circles = ({ points, onClick, margin }: any) => {
  //.on('mousemove', displayTooltip(p => onHover([p])))
  //.on('mouseout', hideTooltip)
  console.log(points)
  return (
    <>
      {points.map((point: any) => {
        return (
          <circle
            fill="gray"
            opacity="0.25"
            cx={point.cx}
            cy={point.cy}
            r={POINT_RADIUS}
            transform={'translate(' + -margin.left + ',0)'}
            //onClick={() => onClick([point])}
          />
        )
      })}
    </>
  )
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
    }
  }
  draw = () => {
    /*this.view = draw(
      this.props.value,
      this.d3Ref.current,
      this.props.onHover,
      this.props.onClick
    )*/
  }
  onZoom = () => {
    /*const timelineContainer = d3.select('.timeline')
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
    d3.select('.axis--y').call(yAxis.scale(newYScale))*/
    /*points
      .attr('cx', d => {
        const cx = newXScale(d.date)
        if (isNaN(cx)) {
          throw 'cx of point calculated as NaN when rescaling axises'
        }
        return margin.left + cx
      })
      .attr('cy', d => {
        const cy = newYScale(Y_VALUE)
        if (isNaN(cy)) {
          throw 'cy of point calculated as NaN when rescaling axises'
        }
        return cy
      })*/
  }
  componentDidMount() {
    window.addEventListener('resize', this.draw)
    if (this.d3Ref.current !== null) {
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
        return { cx, cy }
      })

      this.setState({ points })

      var zoomMin = 1
      var zoomMax = (xAxisMax.getTime() - xAxisMin.getTime()) / (1000 * 60)

      // const zoom = d3
      //   .zoom()
      //   .scaleExtent([zoomMin, zoomMax])
      //   .translateExtent([[0, 0], [width, height]])
      //   .extent([[0, 0], [width, height]])
      //   .on('zoom', this.onZoom)

      // d3.select('.timeline')
      //   .call(zoom)
      //   .transition()
      //   .duration(1500)
      //   .call(
      //     zoom.transform as any,
      //     d3.zoomIdentity
      //       .scale(width / (x(xAxisMin) - x(xAxisMax)))
      //       .translate(-x(xAxisMin), 0)
      //   )
    }
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.draw)
  }
  render() {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = this.state.width - margin.left - margin.right
    const height = SVG_HEIGHT - margin.top - margin.bottom

    return (
      <Root style={this.props.style} className={this.props.className}>
        <ZoomArea>
          <Button onClick={() => this.view.zoomIn()} emphasis="medium">
            +
          </Button>
          <Button onClick={() => this.view.zoomOut()} emphasis="medium">
            -
          </Button>
        </ZoomArea>
        <div style={{ flexDirection: 'column' }}>
          <div
            className="tooltip"
            style={{ position: 'absolute', pointerEvent: 'none', opacity: 0 }}
          />
          <svg
            ref={this.d3Ref as any}
            className="timeline"
            height={SVG_HEIGHT}
            style={{ width: '100%' }}
          >
            <defs>
              <clipPath id="clip">
                <rect width={width} height={height} />
              </clipPath>
            </defs>
            <g transform={'translate(' + margin.left + ',' + margin.top + ')'}>
              <g clipPath="url(#clip)" className="points_g">
                <Circles points={this.state.points} margin={margin} />
              </g>
              <g
                className="axis axis--x"
                transform={'translate(0,' + height + ')'}
              />
              <g className="axis axis--y" display="none" />
            </g>
          </svg>
        </div>
      </Root>
    )
  }
}

export default Timeline
