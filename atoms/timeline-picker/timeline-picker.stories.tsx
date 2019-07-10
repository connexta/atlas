import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import TimelinePicker from './index'
import Compound from './compound'

const TimelineExample = () => {
  return (
    <TimelinePicker
      onChange={() => {
        alert('hello')
      }}
      mode="single"
    />
  )
}

const TimelineCompoundExample = () => {
  return <Compound mode="single" />
}
storiesOf('Timeline Picker', module)
  .addDecorator(withKnobs)
  .add('playground', () => <TimelineExample />)
  .add('compound', () => <TimelineCompoundExample />)
