import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Timeline from './timeline'

const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const createRandomData = (start: Date, sampleSize: number) => {
  let samples = []
  for (let i = 0; i < sampleSize; i++) {
    const date = randomDate(start, new Date())
    const id = uuidv4()
    samples.push({
      date,
      data: {
        id,
        title: 'title - ' + id,
      },
    })
  }

  return samples
}

const createDuplicateData = (date: Date, sampleSize: number) => {
  let samples = []
  for (let i = 0; i < sampleSize; i++) {
    const id = uuidv4()
    samples.push({
      date,
      data: {
        id,
        title: 'title - ' + id,
      },
    })
  }

  return samples
}

type Point = {
  icon?: any
  date: Date
  data?: any
}

const onHover = (point: Point) => {
  return {
    id: point.data.id,
    title: point.data.title || '[NO TITLE]',
    date: point.date,
  }
}

const onHoverCluster = (points: Point[]) => {
  var data: any[] = points.slice(0, 5).map(ele => {
    return {
      title: ele.data.title,
    }
  })

  if (points.length > 5) {
    var obj = { 'hidden results': points.length - 5 }
    data.push(obj)
  }

  return data
}

const onClick = (point: Point) => {
  alert('SINGLE CIRCLE CLICK: \n' + JSON.stringify(point))
}

const onClickCluster = (points: Point[]) => {
  alert('CLUSTER CLICK: \n' + JSON.stringify(points))
}

storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .add('playground', () => {
    const samples = createRandomData(new Date(1990, 0, 1), 100).concat(
      createDuplicateData(new Date(1980, 0, 1), 20)
    )

    return (
      <Timeline
        value={samples}
        onHover={onHover}
        onHoverCluster={onHoverCluster}
        onClick={onClick}
        onClickCluster={onClickCluster}
      >
        Playground
      </Timeline>
    )
  })
