import Timeline from './timeline-picker'
import * as React from 'react'

type Props = {
  mode: 'single' | 'range'
  onChange?: () => void
}

type State = {
  hover?: string
  value?: string
}

class CompoundTimeline extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: undefined,
      hover: undefined,
    }
  }
  render() {
    return (
      <div
        style={{
          width: '400px',
        }}
      >
        <Timeline
          mode="single"
          onChange={value => {
            this.setState({ value })
          }}
          onMouseLeave={() => {
            this.setState({ hover: undefined })
          }}
          onHover={hover => {
            this.setState({ hover })
          }}
        />
        <div>Hover: {this.state.hover}</div>
        <div>Value: {this.state.value}</div>
      </div>
    )
  }
}

export default CompoundTimeline
