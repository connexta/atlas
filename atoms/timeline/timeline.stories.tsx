import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Point } from './timeline'
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

const createRandomData = (start: Date, sampleSize: number): Point[] => {
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
      selected: false,
      id: id,
    })
  }

  return samples
}

const createDuplicateData = (date: Date, sampleSize: number): Point[] => {
  let samples = []
  for (let i = 0; i < sampleSize; i++) {
    const id = uuidv4()
    samples.push({
      date,
      data: {
        id,
        title: 'title - ' + id,
      },
      selected: false,
      id: id,
    })
  }

  return samples
}

type State = {
  points: Point[]
}

class TimelineExample extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    const points = createRandomData(new Date(1990, 0, 1), 100).concat(
      createDuplicateData(new Date(1980, 0, 1), 20)
    )

    this.state = {
      points,
    }
  }

  Tooltip = (points: Point[]) => {
    return <pre>{JSON.stringify(points, null, 2)}</pre>
  }

  onClick = (toMatch: Point[]) => {
    var newPoints = this.state.points.map(p => {
      if (toMatch.some(match => match.id === p.id)) {
        p.selected = !p.selected
      }

      return p
    })

    this.setState({ points: newPoints })
    alert('ON CLICK: \n' + JSON.stringify(toMatch))
  }

  render() {
    return (
      <Timeline
        value={this.state.points}
        onClick={this.onClick}
        style={{
          border: '1px solid grey',
        }}
        Tooltip={this.Tooltip}
      >
        Playground
      </Timeline>
    )
  }
}
storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .add('playground', () => <TimelineExample />)
