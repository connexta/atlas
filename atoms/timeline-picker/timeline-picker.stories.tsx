import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import TimelinePicker from './index'
import Compound from './compound'

class TimelineExample extends React.Component<any, any> {
  render() {
    return (
      <TimelinePicker
        onChange={() => {
          alert('hello')
        }}
        mode="single"
      />
    )
  }
}

class TimelineCompoundExample extends React.Component<any, any> {
  render() {
    return <Compound mode="single" />
  }
}
storiesOf('Timeline Picker', module)
  .addDecorator(withKnobs)
  .add('playground', () => <TimelineExample />)
  .add('compound', () => <TimelineCompoundExample />)
