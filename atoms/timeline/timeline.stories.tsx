import * as React from 'react'
import { useState } from 'react'
import { action } from '@connexta/ace/@storybook/addon-actions'
import { select, number } from '@connexta/ace/@storybook/addon-knobs'
import { storiesOf } from '../../storybook'
import Timeline from './index'
import styled from 'styled-components'

import { createTestData, formatDate } from './util'
import { TimelineItem } from './timeline'

const stories = storiesOf('Components|Timeline', module).addParameters({
  info: `The TimelinePicker is a controlled component that can be used to select a time range. The TimelinePicker utilizies d3.js,
  and supports zooming and dragging as well as translation between timezones.`,
})

const ShowTimelineButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
`

const renderDates = (dates: Date[], format: string) => {
  if (dates.length == 0) {
    return null
  } else if (dates.length == 1) {
    return formatDate(dates[0], format)
  } else if (dates.length == 2) {
    return `${formatDate(dates[0], format)} ---------- ${formatDate(
      dates[1],
      format
    )}`
  }
}

stories.add('Timeline with Data', () => {
  const numDataPoints = number('Number of spaced data points to render', 100)
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

  // const timezoneKnob = select(
  //   'Timezone',
  //   {
  //     UTC: 'Etc/UTC',
  //     '+7:00': 'Etc/GMT-7',
  //     '-12:00': 'Etc/GMT+12',
  //   },
  //   'Etc/UTC'
  // )

  const dateFormatKnob = select(
    'Date Format',
    {
      ISO: 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
      '24 Hour Standard': 'DD MMM YYYY HH:mm:ss.SSS Z',
      '12 Hour Standard': 'DD MMM YYYY h:mm:ss.SSS a Z',
    },
    'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
  )

  const [data, setData] = useState(testData)

  return (
    <Timeline
      height={300}
      mode={mode}
      format={dateFormatKnob}
      data={data}
      dateAttributeAliases={{
        created: 'Created',
        modified: 'Modified',
        published_date: 'Published',
      }}
      onCopy={(copiedValue: string) => action('clicked onCopy')(copiedValue)}
      onSelect={(selectedData: TimelineItem[]) => {
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

  // const timezoneKnob = select(
  //   'Timezone',
  //   {
  //     UTC: 'Etc/UTC',
  //     '+7:00': 'Etc/GMT-7',
  //     '-12:00': 'Etc/GMT+12',
  //   },
  //   'Etc/UTC'
  // )

  const dateFormatKnob = select(
    'Date Format',
    {
      ISO: 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
      '24 Hour Standard': 'DD MMM YYYY HH:mm:ss.SSS Z',
      '12 Hour Standard': 'DD MMM YYYY h:mm:ss.SSS a Z',
    },
    'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
  )
  return (
    <div>
      Launch Time Picker: &nbsp;
      <ShowTimelineButton
        onClick={() => {
          setShowTimeline(!showTimeline)
          setMode(modeKnob as any)
        }}
      >
        T
      </ShowTimelineButton>
      <br />
      <br />
      {renderDates(timePicked, dateFormatKnob)}
      {showTimeline && (
        <Timeline
          height={300}
          mode={mode}
          format={dateFormatKnob}
          heightOffset={100}
          onCopy={(copiedValue: string) =>
            action('clicked onCopy')(copiedValue)
          }
          onDone={(selectionRange: Date[]) => {
            setShowTimeline(false)
            action('clicked onDone')(selectionRange)
            setTimePicked(selectionRange)
            setMode(undefined)
          }}
        />
      )}
    </div>
  )
})
