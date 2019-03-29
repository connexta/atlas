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

const onHover = (points: Point[]) => {
  return <pre>{JSON.stringify(points, null, 2)}</pre>
}

const onClick = (points: Point[]) => {
  alert('ON CLICK: \n' + JSON.stringify(points))
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
        onClick={onClick}
        style={{
          border: '1px solid grey',
        }}
      >
        Playground
      </Timeline>
    )
  })
