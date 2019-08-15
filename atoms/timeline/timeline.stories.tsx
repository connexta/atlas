import * as React from 'react'
import { useState } from 'react'
import { action } from '@connexta/ace/@storybook/addon-actions'
import { select, number } from '@connexta/ace/@storybook/addon-knobs'
import { storiesOf } from '@connexta/ace/@storybook/react'
import Timeline from './index'
import styled from '../../styled'

import { createTestData, formatDate } from './util'
import { Data } from './timeline'

const TIMEZONE = 'America/New_York'
const BACKGROUND_COLOR = '#233540'

const stories = storiesOf('Timeline', module).addParameters({
  info: `The TimelinePicker is a controlled component that can be used to select a time range. The TimelinePicker utilizies d3.js,
  and supports zooming and dragging as well as translation between timezones.`,
})

const TimelineButton = styled.button`
  background-color: darkblue;
  color: white;
`

// Hack to make hooks work with storybook. Real fix available in https://github.com/storybookjs/storybook/releases/tag/v5.2.0-beta.10
stories.addDecorator((Story: any) => <Story />)

const renderDates = (dates: Date[]) => {
  if (dates.length == 0) {
    return null
  } else if (dates.length == 1) {
    return formatDate(dates[0])
  } else if (dates.length == 2) {
    return `${formatDate(dates[0])} ---------- ${formatDate(dates[1])}`
  }
}

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

  const [data, setData] = useState(testData)

  return (
    <div style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Timeline
        mode={mode}
        timezone={TIMEZONE}
        data={data}
        dateAttributeAliases={{
          created: 'Created',
          modified: 'Modified',
          published_date: 'Published',
        }}
        onSelect={(selectedData: Data[]) => {
          action('onSelect')(selectedData)
          const selectedIds = selectedData.map(d => d.id)
          const newData = data.map(d => {
            d.selected = selectedIds.indexOf(d.id) !== -1
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

stories.add('Conditional Render', () => {
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

  const [showTimeline, setShowTimeline] = useState(false)
  const [timePicked, setTimePicked] = useState<Date[]>([])

  return (
    <div>
      Launch Time Picker: &nbsp;
      <TimelineButton
        onClick={() => {
          setShowTimeline(!showTimeline)
          setMode(modeKnob as any)
        }}
      >
        T
      </TimelineButton>
      <br />
      <br />
      {renderDates(timePicked)}
      {showTimeline && (
        <div style={{ backgroundColor: BACKGROUND_COLOR }}>
          <Timeline
            mode={mode}
            timezone={TIMEZONE}
            onDone={(selectionRange: Date[]) => {
              setShowTimeline(false)
              action('clicked onDone')(selectionRange)
              setTimePicked(selectionRange)
              setMode(undefined)
            }}
          />
        </div>
      )}
    </div>
  )
})
