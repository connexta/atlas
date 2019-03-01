import * as React from 'react'
import * as d3 from 'd3'
// const clustering = require('density-clustering')
import * as clustering from 'density-clustering'

type Point = {
  icon?: any
  date: Date
  data?: any
}

type Props = {
  children?: any
  value: Point[]
  onHover?: () => void
  onHoverCluster?: () => void
  onClick?: () => void
  onClickCluster?: () => void
}

const dbscan = new clustering.DBSCAN()
const RADIUS = 3.5
const RADIUS_CLUSTER = 7
const CLUSTER_NEIGHBOR_RADIUS = RADIUS
const POINTS_TO_FORM_CLUSTER = 2
const X_AXIS_MAX = new Date()
const X_AXIS_MIN = new Date('1/1/1950')
const Y_VALUE = 0
const ZOOM_MIN = 1
const ZOOM_MAX = (X_AXIS_MAX.getTime() - X_AXIS_MIN.getTime()) / (1000 * 60)
const SVG_HEIGHT = 100

const createClusterPoint = (pointsOfCluster: number[][]) => {
  var averageCx =
    pointsOfCluster.reduce((acc, circle) => acc + Number(circle[0]), 0) /
    pointsOfCluster.length
  // All points are on the y axis, no need to take average
  var cy = pointsOfCluster[0][1]

  return {
    cx: averageCx,
    cy: cy,
    points: pointsOfCluster,
  }
}

const draw = (data: Point[], parentRef: any) => {
  d3.selectAll('.timeline').remove()

  var svg = d3
      .select(parentRef)
      .append('svg')
      .attr('class', 'timeline')
      .attr('width', 960)
      .attr('height', SVG_HEIGHT),
    margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 960 - margin.left - margin.right,
    height = SVG_HEIGHT - margin.top - margin.bottom

  // setup clipping region
  svg
    .append('defs')
    .append('clipPath')
    .attr('id', 'clip')
    .append('rect')
    .attr('width', width)
    .attr('height', height)

  var points_g = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('clip-path', 'url(#clip)')
    .classed('points_g', true)

  // setup axises
  var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0])

  var xAxis = d3.axisBottom(x)
  var yAxis = d3.axisLeft(y)

  // setup data points
  var toolTip = d3
    .select(parentRef)
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0)

  var points = points_g
    .selectAll('dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('fill', 'black')
    .attr('cx', d => {
      if (isNaN(x(d.date))) {
        console.log('date:' + d.date)
        console.log('metacard: ' + JSON.stringify(d))
      }
      return margin.left + x(d.date)
    })
    .attr('cy', d => {
      if (isNaN(y(d.date))) {
        console.log('date:' + d.date)
        console.log('metacard: ' + JSON.stringify(d))
      }
      return margin.top + y(Y_VALUE)
    })
    .attr('r', RADIUS)
    .on('mouseover', (d, i, eles) => {
      toolTip
        .transition()
        .duration(200)
        .style('opacity', 0.9)
      toolTip.html('date: ' + d.date + 'value: ' + Y_VALUE)
      toolTip.style('left', d3.select(eles[i]).attr('cx') + 'px')
      toolTip.style('top', d3.select(eles[i]).attr('cy') + 'px')
    })
    .on('mouseout', _d => {
      toolTip
        .transition()
        .duration(500)
        .style('opacity', 0)
    })

  // setup clustering
  var updateClusters = (
    points: d3.Selection<SVGCircleElement, Point, SVGGElement, {}>
  ) => {
    d3.selectAll('.cluster').remove()

    var newClusterPoints = []
    var dotCoordinates = points.nodes().map(dot => {
      const cx = dot.getAttribute('cx') || '0'
      const cy = dot.getAttribute('cy') || '0'
      return {
        dot: dot,
        coordinates: [parseFloat(cx), parseFloat(cy)],
      }
    })

    //results are clusters of indices relating to array of coordiantes passed in
    var clusters = dbscan.run(
      dotCoordinates.map(c => c.coordinates),
      CLUSTER_NEIGHBOR_RADIUS,
      POINTS_TO_FORM_CLUSTER
    )

    for (var i = 0; i < clusters.length; i++) {
      var cluster = clusters[i]
      //make any points that make up a cluster invisible and create a new cluster node
      //else, turn on any disabled points that are no longer invisible
      if (cluster.length > 1) {
        for (var index in cluster) {
          dotCoordinates[Number(index)].dot.setAttribute('display', 'none')
        }

        var pointsWithinCluster = cluster.map(
          (i: Number) => dotCoordinates[Number(i)].coordinates
        )
        newClusterPoints.push(createClusterPoint(pointsWithinCluster))
      } else {
        dotCoordinates[cluster[0]].dot.setAttribute('display', 'inline')
      }
    }

    points_g
      .selectAll('clust')
      .data(newClusterPoints)
      .enter()
      .append('circle')
      .attr('class', 'cluster')
      .attr('fill', 'grey')
      .attr('cx', c => c.cx + 'px')
      .attr('cy', c => c.cy + 'px')
      .attr('r', RADIUS_CLUSTER)
      .text(c => c.points.length)
      .on('mouseover', (_d, i, eles) => {
        toolTip
          .transition()
          .duration(200)
          .style('opacity', 0.9)
        toolTip.html('IMMMA CLUSTER!')
        toolTip.style('left', d3.select(eles[i]).attr('cx') + 'px')
        toolTip.style('top', d3.select(eles[i]).attr('cy') + 'px')
      })
      .on('mouseout', _d => {
        toolTip
          .transition()
          .duration(500)
          .style('opacity', 0)
      })
  }

  var zoomed = () => {
    let t = d3.zoomTransform(svg.node() as any)
    var newXScale = t.rescaleX(x)
    var newYScale = t.rescaleY(y)
    g.select('.axis--x').call(xAxis.scale(newXScale))
    g.select('.axis--y').call(yAxis.scale(newYScale))

    points
      .attr('cx', d => {
        if (isNaN(newXScale(d.date))) {
          // console.log('metacard: ' + JSON.stringify(d))
        }
        return margin.left + newXScale(d.date)
      })
      .attr('cy', d => {
        if (isNaN(newYScale(d.date))) {
          // console.log('metacard: ' + JSON.stringify(d))
        }
        return newYScale(Y_VALUE)
      })
      .attr('r', RADIUS)

    updateClusters(points)
  }

  var zoom = d3
    .zoom()
    .scaleExtent([ZOOM_MIN, ZOOM_MAX])
    .translateExtent([[0, 0], [width, height]])
    .extent([[0, 0], [width, height]])
    .on('zoom', zoomed)

  var g = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  x.domain([X_AXIS_MIN, X_AXIS_MAX])
  y.domain([0, Y_VALUE])

  g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)

  g.append('g')
    .attr('class', 'axis axis--y')
    .call(yAxis)

  var scale = () => {
    var scaling = width / (x(X_AXIS_MIN) - x(X_AXIS_MAX))
    console.log('returning scaling: ' + scaling)
    return scaling
  }

  var translateX = () => {
    console.log('returning translatX: ' + -x(X_AXIS_MIN))
    return -x(X_AXIS_MIN)
  }

  svg
    .call(zoom)
    .transition()
    .duration(1500)
    .call(
      zoom.transform,
      d3.zoomIdentity.scale(scale()).translate(translateX(), 0)
    )

  updateClusters(points)
}

class Timeline extends React.Component<Props, {}> {
  d3Ref = React.createRef()
  componentDidMount() {
    draw(this.props.value, this.d3Ref.current)
  }
  componentDidUpdate() {
    draw(this.props.value, this.d3Ref.current)
  }
  render() {
    return <div ref={this.d3Ref as any} />
  }
}

export default Timeline
