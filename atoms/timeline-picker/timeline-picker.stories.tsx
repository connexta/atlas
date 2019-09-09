import * as React from 'react'
import { useState } from 'react'
import { action } from '@connexta/ace/@storybook/addon-actions'
import { storiesOf } from '@connexta/ace/@storybook/react'
import TimelinePicker from './index'

//@ts-ignore
import moment from 'moment-timezone'

import { test_data as _data } from './util'

const DATE_FORMAT = 'MM/DD/YYYY h:mm a'
const TIMEZONE = 'America/New_York'

const stories = storiesOf('Timeline Picker', module).addParameters({
  info: `The TimelinePicker can be used to select a time range. The TimelinePicker utilizies d3.js,
  and supports zooming and dragging as well as translation between timezones.`,
})

const formatDate = (value: Date) => moment(value).format(DATE_FORMAT)

const renderValues = (value: Date[]) => {
  if (value === undefined || value.length != 2) {
    return ''
  }

  return `${formatDate(value[0])} - ${formatDate(value[1])}`
}

stories.add('Initial Range', () => {
  const [value, setValue] = useState([
    new Date('01/25/1995'),
    new Date('05/04/2008'),
  ])
  const [hover, setHover] = useState()

  return (
    <div>
      {`Values: ${renderValues(value)}`}
      <br />
      <br />
      {`Hover: ${hover != null ? formatDate(hover) : ''}`}
      <TimelinePicker
        timezone={TIMEZONE}
        // data={data}
        onChange={(v: Date[]) => {
          action('onChange')(v)
          setValue(v)
        }}
        onHover={(v: Date) => setHover(v)}
        value={value}
      />
    </div>
  )
})

stories.add('No Initial Range', () => {
  const [value, setValue] = useState([])
  const [hover, setHover] = useState()

  return (
    <div>
      {`Values: ${renderValues(value)}`}
      <br />
      <br />
      {`Hover: ${hover != null ? formatDate(hover) : ''}`}
      <TimelinePicker
        timezone={TIMEZONE}
        onChange={(v: Date[]) => {
          action('onChange')(v)
          setValue(v as any)
        }}
        onHover={(v: Date) => setHover(v)}
        value={value}
      />
    </div>
  )
})
