import * as React from 'react'
import { useState } from 'react'
import { action } from '@connexta/ace/@storybook/addon-actions'
import { select, number } from '@connexta/ace/@storybook/addon-knobs'
import { storiesOf } from '@connexta/ace/@storybook/react'
import Timeline from './index'

//@ts-ignore
import { createTestData } from './util'

const TIMEZONE = 'America/New_York'

const stories = storiesOf('Timeline', module).addParameters({
  info: `The TimelinePicker is a controlled component that can be used to select a time range. The TimelinePicker utilizies d3.js,
  and supports zooming and dragging as well as translation between timezones.`,
})

// Hack to make hooks work with storybook. Real fix available in https://github.com/storybookjs/storybook/releases/tag/v5.2.0-beta.10
stories.addDecorator((Story: any) => <Story />)

stories.add('No Initial Range', () => {
  const [selectionRange, setSelectionRange] = useState([])
  const [hover, setHover] = useState()

  const numDataPoints = number('Number of spaced data points to render', 500)
  const testData = createTestData(numDataPoints)

  const dateAttributeKnob = select(
    'Date Attribute',
    {
      Created: 'created',
      Modified: 'modified',
      Published: 'published',
    },
    'created'
  )

  const [data, setData] = useState(testData)
  const [dateAttribute] = useState(dateAttributeKnob)

  return (
    <div style={{ backgroundColor: '#233540' }}>
      <Timeline
        timezone={TIMEZONE}
        data={data}
        dateAttribute={dateAttribute}
        onSelect={(ids: string[]) => {
          action('onSelect')(ids)
          const newData = data.map(d => {
            d.selected = ids.indexOf(d.id) !== -1
            return d
          })
          setData(newData)
        }}
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

stories.add('Initial Range', () => {
  const [selectionRange, setSelectionRange] = useState([
    new Date('01/25/1995'),
    new Date('05/04/2008'),
  ])
  const numDataPoints = number('Number of spaced data points to render', 500)
  const [data, setData] = useState(createTestData(numDataPoints))

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
      <Timeline
        timezone={TIMEZONE}
        data={data}
        dateAttribute={dateAttribute}
        onSelect={(ids: string[]) => {
          action('onSelect')(ids)
          const newData = data.map(d => {
            d.selected = ids.indexOf(d.id) !== -1
            return d
          })
          setData(newData)
        }}
        onChange={(v: Date[]) => {
          action('onChange')(v)
          setSelectionRange(v)
        }}
        selectionRange={selectionRange}
      />
    </div>
  )
})

stories.add('Time Picker Input - Single', () => {
  const [selectionRange, setSelectionRange] = useState([])
  const [hover, setHover] = useState()

  const numDataPoints = number('Number of spaced data points to render', 500)
  const [data, setData] = useState(createTestData(numDataPoints))

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
      <Timeline
        mode="single"
        timezone={TIMEZONE}
        dateAttribute={dateAttribute}
        onChange={(v: Date[]) => {
          action('onChange')(v)
          setSelectionRange(v as any)
        }}
        onHover={(v: Date) => setHover(v)}
        selectionRange={selectionRange}
        onDone={action('clicked onDone')}
      />
    </div>
  )
})

stories.add('Time Picker Input - Range', () => {
  const [selectionRange, setSelectionRange] = useState([])
  const [hover, setHover] = useState()

  const numDataPoints = number('Number of spaced data points to render', 500)
  const [data, setData] = useState(createTestData(numDataPoints))

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
      <Timeline
        mode="range"
        timezone={TIMEZONE}
        dateAttribute={dateAttribute}
        onChange={(v: Date[]) => {
          action('onChange')(v)
          setSelectionRange(v as any)
        }}
        onHover={(v: Date) => setHover(v)}
        selectionRange={selectionRange}
        onDone={action('clicked onDone')}
      />
    </div>
  )
})
