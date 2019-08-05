import * as React from 'react'
import { useState } from 'react'
import { action } from '@connexta/ace/@storybook/addon-actions'
import { select, number } from '@connexta/ace/@storybook/addon-knobs'
import { storiesOf } from '@connexta/ace/@storybook/react'
import TimelinePicker from './index'

//@ts-ignore
import { test_data } from './util'

const TIMEZONE = 'America/New_York'

const stories = storiesOf('Timeline Picker', module).addParameters({
  info: `The TimelinePicker is a controlled component that can be used to select a time range. The TimelinePicker utilizies d3.js,
  and supports zooming and dragging as well as translation between timezones.`,
})

// Hack to make hooks work with storybook. Real fix available in https://github.com/storybookjs/storybook/releases/tag/v5.2.0-beta.10
stories.addDecorator((Story: any) => <Story />)

stories.add('Initial Range', () => {
  const [selectionRange, setSelectionRange] = useState([
    new Date('01/25/1995'),
    new Date('05/04/2008'),
  ])
  // const [hover, setHover] = useState()

  const numDataPoints = number('Number of spaced data points to render', 500)
  const [data] = useState(test_data(numDataPoints))

  const dateAttribute = select(
    'Date Attribute',
    {
      Created: 'created',
      Modified: 'modified',
      Published: 'published',
    },
    'created'
  )

  return (
    <div style={{ backgroundColor: '#233540' }}>
      <TimelinePicker
        timezone={TIMEZONE}
        data={data}
        dateAttribute={dateAttribute}
        onChange={(v: Date[]) => {
          action('onChange')(v)
          setSelectionRange(v)
        }}
        // onHover={(v: Date) => setHover(v)}
        selectionRange={selectionRange}
        onCancel={action('called onCancel()')}
        onDone={action('called onDone()')}
      />
    </div>
  )
})

stories.add('No Initial Range', () => {
  const [selectionRange, setSelectionRange] = useState([])
  const [hover, setHover] = useState()

  const numDataPoints = number('Number of spaced data points to render', 500)
  const [data] = useState(test_data(numDataPoints))

  const dateAttribute = select(
    'Date Attribute',
    {
      Created: 'created',
      Modified: 'modified',
      Published: 'published',
    },
    'created'
  )

  return (
    <div style={{ backgroundColor: '#233540' }}>
      <TimelinePicker
        timezone={TIMEZONE}
        data={data}
        dateAttribute={dateAttribute}
        onChange={(v: Date[]) => {
          action('onChange')(v)
          setSelectionRange(v as any)
        }}
        onHover={(v: Date) => setHover(v)}
        selectionRange={selectionRange}
      />
    </div>
  )
})
