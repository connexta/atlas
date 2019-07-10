import Timeline from './timeline-picker'
import * as React from 'react'

type Props = {
  mode: 'single' | 'range'
  onChange?: () => void
}

const CompoundTimeline = (props: Props) => {
  const [value, setValue] = React.useState<string | undefined>(undefined)
  const [hover, setHover] = React.useState<string | undefined>(undefined)

  return (
    <div
      style={{
        width: '700px',
      }}
    >
      <Timeline
        mode="single"
        onChange={value => setValue(value)}
        onMouseLeave={() => setHover(undefined)}
        onHover={hover => setHover(hover)}
      />
      <div>Hover: {hover}</div>
      <div>Value: {value}</div>
    </div>
  )
}

export default CompoundTimeline
