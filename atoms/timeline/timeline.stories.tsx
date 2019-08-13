import * as React from 'react'
import { useState } from 'react'
import { action } from '@connexta/ace/@storybook/addon-actions'
import { select, number } from '@connexta/ace/@storybook/addon-knobs'
import { storiesOf } from '@connexta/ace/@storybook/react'
import Timeline from './index'

import { createTestData } from './util'

const TIMEZONE = 'America/New_York'
const BACKGROUND_COLOR = '#233540'

const stories = storiesOf('Timeline', module).addParameters({
  info: `The TimelinePicker is a controlled component that can be used to select a time range. The TimelinePicker utilizies d3.js,
  and supports zooming and dragging as well as translation between timezones.`,
})

// Hack to make hooks work with storybook. Real fix available in https://github.com/storybookjs/storybook/releases/tag/v5.2.0-beta.10
stories.addDecorator((Story: any) => <Story />)

stories.add('Timeline', () => {
  const modeKnob = select(
    'Initial Mode',
    {
      Single: 'single',
      Range: 'range',
    },
    'single'
  )

  const [mode, setMode] = useState<'single' | 'range' | undefined>(
    modeKnob as any
  )

  return (
    <div style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Timeline
        mode={mode}
        timezone={TIMEZONE}
        onDone={(selectionRange: Date[]) => {
          action('clicked onDone')(selectionRange)
          setMode(undefined)
        }}
      />
    </div>
  )
})

stories.add('Timeline with Data', () => {
  const numDataPoints = number('Number of spaced data points to render', 500)
  const testData = createTestData(numDataPoints)

  const modeKnob = select(
    'Initial Mode',
    {
      Selection: null,
      Single: 'single',
      Range: 'range',
    },
    null
  )

  const [mode, setMode] = useState<'single' | 'range' | undefined>(
    modeKnob as any
  )

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
    <div style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Timeline
        mode={mode}
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
        onDone={(selectionRange: Date[]) => {
          action('clicked onDone')(selectionRange)
          setMode(undefined)
        }}
      />
    </div>
  )
})
