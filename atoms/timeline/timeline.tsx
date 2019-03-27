import * as React from 'react'
import * as d3 from 'd3'
import Button from '../button'

const clustering = require('density-clustering')
// import * as clustering from 'density-clustering'

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
const RADIUS = 7
// const RADIUS_CLUSTER = 7
const CLUSTER_RADIUS = RADIUS * 2
const CLUSTER_NEIGHBOR_RADIUS = CLUSTER_RADIUS
const POINTS_TO_FORM_CLUSTER = 2
const X_AXIS_MAX = (() => {
  var now = new Date()
  return new Date(now.setFullYear(now.getFullYear() + 2))
})()

const X_AXIS_MIN = new Date('1/1/1950')
const Y_VALUE = 0
const ZOOM_MIN = 1
const ZOOM_MAX = (X_AXIS_MAX.getTime() - X_AXIS_MIN.getTime()) / (1000 * 60)
const SVG_HEIGHT = 300

const createClusterPoint = (d3Points: D3Point[]): ClusterPoint => {
  // var averageCx =
  //   d3Points.reduce((acc, point) => acc + Number(point.coordinates[0]), 0) /
  //   d3Points.length
  var pointCxs: number[] = d3Points.map(p => p.coordinates[0])
  var maxCx = Math.max(...pointCxs)
  var minCx = Math.min(...pointCxs)
  var clusterRadius = (maxCx - minCx + 2 * RADIUS) / 2
  var clusterCx = minCx - RADIUS + clusterRadius

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

const objsToTooltip = (data: any, maxDisplay = 5) => {
  let header = '<div>Results: ' + data.length + '</div>'

  let body = data.reduce(
    (prev: string, ele: any) => prev + objToTooltip(ele),
    ''
  )
  return '<div>' + header + body + '</div>'
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

  var svg = d3
    .select(parentRef)
    .append('svg')
    .attr('class', 'timeline')
    .attr('height', SVG_HEIGHT)
    .style('width', '100%')

  // @ts-ignore
  var svgWidth = svg.node().getBoundingClientRect().width

  var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = svgWidth - margin.left - margin.right,
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
    .attr('fill', 'gray')
    .attr('opacity', '0.25')
    .attr('cx', d => {
      if (isNaN(x(d.date))) {
        console.log('ERROR: cx point calculated as NaN')
        console.log('date:' + d.date)
        // console.log('metacard: ' + JSON.stringify(d))
      }
      return margin.left + x(d.date)
    })
    .attr('cy', d => {
      if (isNaN(y(d.date))) {
        console.log('ERROR: cy point calculated as NaN')
        console.log('date:' + d.date)
        // console.log('metacard: ' + JSON.stringify(d))
      }
      return margin.top + y(Y_VALUE)
    })
    .attr('r', RADIUS)
    .on('click', onClick)
    .on('mouseover', (d, i, eles) => {
      debugger

      var data = onHover(d)

      toolTip
        .transition()
        .duration(200)
        .style('opacity', 0.9)
      // toolTip.html('date: ' + d.date + 'value: ' + Y_VALUE)
      toolTip.html(objToTooltip(data))
      toolTip.style('left', d3.select(eles[i]).attr('cx') + 'px')
      toolTip.style('top', d3.select(eles[i]).attr('cy') + 'px')
    })
  // .on('mouseout', _d => {
  //   toolTip
  //     .transition()
  //     .duration(500)
  //     .style('opacity', 0)
  // })

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

    // var pointsToCoordiantes: D3Point[] = d3Selections.nodes().map((svgElement) => {
    //   const cx = svgElement.getAttribute('cx') || '0'
    //   const cy = svgElement.getAttribute('cy') || '0'

    //   if (cx === '0' || cy === '0') {
    //     throw 'cx or cy is 0!!! This shouldnt be happening!!! AHHHH!!!'
    //   }

    //   return {
    //     svgElement,
    //     point,
    //     coordinates: [parseFloat(cx), parseFloat(cy)],
    //   }
    // })

    //results are clusters of indices relating to array of coordiantes passed in
    var clusters = dbscan.run(
      d3Points.map(c => c.coordinates),
      CLUSTER_NEIGHBOR_RADIUS,
      POINTS_TO_FORM_CLUSTER
    )

    for (var i = 0; i < clusters.length; i++) {
      var cluster: number[] = clusters[i]
      //make any points that make up a cluster invisible and create a new cluster node
      //else, turn on any disabled points that are no longer invisible
      if (cluster.length > 1) {
        // for (var index in cluster) {
        //   d3Points[index].svgElement.setAttribute('display', 'none')
        // }

        var pointsWithinCluster = cluster.map(i => d3Points[i])
        newClusterPoints.push(createClusterPoint(pointsWithinCluster))
      } else {
        // d3Points[cluster[0]].svgElement.setAttribute('display', 'inline')
      }
    }

    var clusters: any = points_g
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
      .on('click', (clusterInfo: ClusterPoint) => {
        onClickCluster(clusterInfo.points)
      })
      .on('mouseover', (clusterPoint, i, eles) => {
        var data = onHoverCluster(clusterPoint.points)

        toolTip
          .transition()
          .duration(200)
          .style('opacity', 0.9)
        toolTip.html(objsToTooltip(data))
        toolTip.style('left', d3.select(eles[i]).attr('cx') + 'px')
        toolTip.style('top', d3.select(eles[i]).attr('cy') + 'px')
      })
      .on('mouseout', _d => {
        toolTip
          .transition()
          .duration(500)
          .style('opacity', 0)
      })

    points_g
      .selectAll('clust')
      .data(newClusterPoints)
      .enter()
      .append('text')
      .attr('fill', 'red')
      .attr('class', 'cluster-text')
      .attr('x', (c: any) => c.cx + 'px')
      .attr('y', (c: any) => c.cy + 'px')
      .attr('font-size', 20)
      .text(c => c.points.length)
      .on('click', (clusterInfo: ClusterPoint) => {
        onClickCluster(clusterInfo.points)
      })
      .on('mouseover', (
        clusterPoint
        // i,
        // eles
      ) => {
        var data = onHoverCluster(clusterPoint.points)

        toolTip
          .transition()
          .duration(200)
          .style('opacity', 0.9)
        toolTip.html(objsToTooltip(data))
        // toolTip.style('left', d3.select(eles[i]).attr('cx') + 'px')
        // toolTip.style('top', d3.select(eles[i]).attr('cy') + 'px')
      })
      .on('mouseout', _d => {
        toolTip
          .transition()
          .duration(500)
          .style('opacity', 0)
      })
  }

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
    // console.log('returning scaling: ' + scaling)
    return scaling
  }

  var translateX = () => {
    // console.log('returning translatX: ' + -x(X_AXIS_MIN))
    return -x(X_AXIS_MIN)
  }

  var zoomed = () => {
    let t = d3.zoomTransform(svg.node() as any)

    // TODO - No idea why k ends up being -1, this is a hacky fix :(
    //0 means nothing will display, -1 inverts
    if (t.k === -1) {
      // @ts-ignore
      t.k = 1
    }

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

  d3.select('#zoom_out').on('click', function() {
    zoom.scaleBy(svg.transition().duration(500), 2)
  })

  d3.select('#zoom_in').on('click', function() {
    zoom.scaleBy(svg.transition().duration(500), 0.2)
  })

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
          <Button
            id="zoom_out"
            emphasis="medium"
            // onClick={() => alert('zooming in')}
          >
            +
          </Button>
          <Button
            id="zoom_in"
            emphasis="medium"
            // onClick={() => alert('zooming out')}
          >
            -
          </Button>
        </div>
        <div ref={this.d3Ref as any} style={{ flexDirection: 'column' }} />
      </div>
    )
  }
}

export default Timeline
