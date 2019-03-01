import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Timeline from './timeline'

const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

const createSampleData = (sampleSize: number) => {
  let samples = []
  for (let i = 0; i < sampleSize; i++) {
    const date = randomDate(new Date(1990, 0, 1), new Date())
    samples.push({
      date,
    })
  }
  return samples
}

storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .add('playground', () => {
    const samples = createSampleData(100)
    return <Timeline value={samples}>Playground</Timeline>
  })
