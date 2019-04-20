import Timeline from './timeline-picker'
import * as React from 'react'

type Props = {
  mode: 'single' | 'range'
  onChange?: () => void
}

type State = {
  value?: string
}

class CompoundTimeline extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: undefined,
    }
  }
  render() {
    return (
      <>
        <Timeline
          mode="single"
          onChange={value => {
            this.setState({ value })
          }}
        />
        <div>Value: {this.state.value}</div>
      </>
    )
  }
}

export default CompoundTimeline
