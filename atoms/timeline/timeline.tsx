import * as React from 'react'
import * as d3 from 'd3'
import Button from '../button'

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
  icon?: any
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

type Props = {
  children?: any
  value: Point[]
  onHover: (point: Point) => any
  onHoverCluster: (points: Point[]) => any
  onClick: (point: Point) => void
  onClickCluster: (points: Point[]) => void
}

const dbscan = new clustering.DBSCAN()
const POINT_RADIUS = 7
const CLUSTER_RADIUS = POINT_RADIUS * 2
const CLUSTER_NEIGHBOR_RADIUS = CLUSTER_RADIUS
const POINTS_TO_FORM_CLUSTER = 2
const Y_VALUE = 0
const SVG_HEIGHT = 300

function xAxisScale(points: Point[]) {
  var dates = points.map(p => p.date)
  var minDate = new Date(Math.min.apply(null, dates))
  var maxDate = new Date(Math.max.apply(null, dates))
  var offset = scaleOffset(minDate, maxDate)
  minDate.setTime(minDate.getTime() - offset)
  maxDate.setTime(maxDate.getTime() + offset)
  return [minDate, maxDate]
}

function scaleOffset(min: Date, max: Date) {
  return (max.getTime() - min.getTime()) * 0.05
}

function hideTooltip() {
  d3.select('.tooltip')
    .html('')
    .transition()
    .duration(500)
    .style('opacity', 0)
}

function displayToolTip(toDisplay: string) {
  var toolTip = d3.select('.tooltip')
  toolTip
    .transition()
    .duration(200)
    .style('opacity', 0.9)
    .style('display', 'inline')
  toolTip.html(toDisplay)
  toolTip.style('left', d3.event.pageX + 'px')
  toolTip.style('top', d3.event.pageY + 50 + 'px')
}
const createClusterPoint = (d3Points: D3Point[]): ClusterPoint => {
  var pointCxs: number[] = d3Points.map(p => p.coordinates[0])
  var maxCx = Math.max(...pointCxs)
  var minCx = Math.min(...pointCxs)
  var clusterRadius = (maxCx - minCx + 2 * POINT_RADIUS) / 2
  var clusterCx = minCx - POINT_RADIUS + clusterRadius

  // All points are on the y axis, no need to take average
  var cy = d3Points[0].coordinates[1]

  return {
    cx: clusterCx,
    cy: cy,
    radius: clusterRadius,
    points: d3Points.map(d3point => d3point.point),
  }
}

const objToTooltip = (data: any) => {
  return Object.keys(data).reduce((prev, key) => {
    return `${prev}<div>${key}: ${data[key]}</div>`
  }, '')
}

const objsToTooltip = (data: any) => {
  var body = data.reduce(
    (prev: string, ele: any) => prev + objToTooltip(ele),
    ''
  )
  return '<div>' + body + '</div>'
}

const draw = (
  data: Point[],
  parentRef: any,
  onHover: (point: Point) => any,
  onHoverCluster: (points: Point[]) => any,
  onClick: (point: Point) => void,
  onClickCluster: (points: Point[]) => void
) => {
  d3.selectAll('.timeline').remove()
  d3.selectAll('.tooltip').remove()

  var timelineContainer = d3
    .select(parentRef)
    .append('svg')
    .attr('class', 'timeline')
    .attr('height', SVG_HEIGHT)
    .style('width', '100%')

  //TODO - getBoundingClientRect can return undefined sometimes. see if there's a better way to do this
  // @ts-ignore
  var timelineWidth = timelineContainer.node().getBoundingClientRect().width

  var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = timelineWidth - margin.left - margin.right,
    height = SVG_HEIGHT - margin.top - margin.bottom

  // setup containers
  timelineContainer
    .append('defs')
    .append('clipPath')
    .attr('id', 'clip')
    .append('rect')
    .attr('width', width)
    .attr('height', height)

  var content = timelineContainer
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  var pointsContainer = content
    .append('g')
    .attr('clip-path', 'url(#clip)')
    .classed('points_g', true)

  // setup axises
  var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0])

  var xAxis = d3.axisBottom(x)
  var yAxis = d3.axisLeft(y)

  var xAxisRange = xAxisScale(data)
  var xAxisMin = xAxisRange[0]
  var xAxisMax = xAxisRange[1]

  x.domain([xAxisMin, xAxisMax])
  y.domain([0, Y_VALUE])

  content
    .append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)

  content
    .append('g')
    .attr('class', 'axis axis--y')
    .attr('display', 'none')
    .call(yAxis)

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
    .on('click', onClick)
    .on('mouseover', d => {
      var point = onHover(d)
      displayToolTip(objToTooltip(point))
    })
    .on('mouseout', _d => {
      hideTooltip()
    })

  d3.select(parentRef)
    .append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('pointer-events', 'none')
    .style('opacity', 0)

  // setup clustering
  var updateClusters = (
    d3Selections: d3.Selection<SVGCircleElement, Point, SVGGElement, {}>
  ) => {
    d3.selectAll('.cluster').remove()
    d3.selectAll('.cluster-text').remove()

    var newClusterPoints = []

    var d3Points: D3Point[] = []
    d3Selections.each((point, index, groups) => {
      var svgElement = groups[index]
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
    )

    for (var i = 0; i < clusters.length; i++) {
      var cluster: number[] = clusters[i]
      if (cluster.length > 1) {
        var pointsWithinCluster = cluster.map(i => d3Points[i])
        newClusterPoints.push(createClusterPoint(pointsWithinCluster))
      }
    }

    var clusters: any = pointsContainer
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
      .on('click', (clusterInfo: ClusterPoint) => {
        onClickCluster(clusterInfo.points)
      })
      .on('mouseover', (clusterPoint, i, eles) => {
        var data = onHoverCluster(clusterPoint.points)
        displayToolTip(objsToTooltip(data))
      })
      .on('mouseout', _d => {
        hideTooltip()
      })

    pointsContainer
      .selectAll('clust')
      .data(newClusterPoints)
      .enter()
      .append('text')
      .attr('fill', 'red')
      .attr('class', 'cluster-text')
      .attr('x', (c: any) => c.cx + 'px')
      .attr('y', (c: any) => c.cy + 'px')
      .attr('font-size', 20)
      .attr('transform', 'translate(' + -margin.left + ',0)')
      .text(c => c.points.length)
      .on('click', (clusterInfo: ClusterPoint) => {
        onClickCluster(clusterInfo.points)
      })
      .on('mouseover', (clusterPoint, i, eles) => {
        var data = onHoverCluster(clusterPoint.points)
        displayToolTip(objsToTooltip(data))
      })
      .on('mouseout', _d => {
        hideTooltip()
      })
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

    var newXScale = t.rescaleX(x)
    var newYScale = t.rescaleY(y)
    content.select('.axis--x').call(xAxis.scale(newXScale))
    content.select('.axis--y').call(yAxis.scale(newYScale))

    points
      .attr('cx', d => {
        var cx = newXScale(d.date)
        if (isNaN(cx)) {
          throw 'cx of point calculated as NaN when rescaling axises'
        }
        return margin.left + cx
      })
      .attr('cy', d => {
        var cy = newYScale(Y_VALUE)
        if (isNaN(cy)) {
          throw 'cy of point calculated as NaN when rescaling axises'
        }
        return cy
      })
      .attr('r', POINT_RADIUS)

    updateClusters(points)
  }

  var zoom = d3
    .zoom()
    .scaleExtent([zoomMin, zoomMax])
    .translateExtent([[0, 0], [width, height]])
    .extent([[0, 0], [width, height]])
    .on('zoom', zoomed)

  d3.select('#zoom_out').on('click', function() {
    zoom.scaleBy(timelineContainer.transition().duration(500), 2)
  })

  d3.select('#zoom_in').on('click', function() {
    zoom.scaleBy(timelineContainer.transition().duration(500), 0.2)
  })

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
}

class Timeline extends React.Component<Props, {}> {
  d3Ref = React.createRef()

  onResize() {
    draw(
      this.props.value,
      this.d3Ref.current,
      this.props.onHover,
      this.props.onHoverCluster,
      this.props.onClick,
      this.props.onClickCluster
    )
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this))

    draw(
      this.props.value,
      this.d3Ref.current,
      this.props.onHover,
      this.props.onHoverCluster,
      this.props.onClick,
      this.props.onClickCluster
    )
  }

  componentDidUpdate() {
    window.removeEventListener('resize', this.onResize.bind(this))

    draw(
      this.props.value,
      this.d3Ref.current,
      this.props.onHover,
      this.props.onHoverCluster,
      this.props.onClick,
      this.props.onClickCluster
    )
  }

  render() {
    return (
      <div>
        <div style={{ float: 'right', paddingRight: '10px' }}>
          <Button id="zoom_out" emphasis="medium">
            +
          </Button>
          <Button id="zoom_in" emphasis="medium">
            -
          </Button>
        </div>
        <div ref={this.d3Ref as any} style={{ flexDirection: 'column' }} />
      </div>
    )
  }
}

export default Timeline
