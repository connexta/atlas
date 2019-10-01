const moment = require('moment-timezone')
import { TimelineItem } from './timeline'

/** Python's "range" function */
export const range = (n: number) => Array.from(Array(n).keys())

const getDataPoint = (
  num: number,
  createdYear: number,
  modifiedYear: number,
  publishedYear: number
) => {
  const month = Math.floor(Math.random() * 12)
  const year = Math.floor(Math.random() * 40)
  const day = Math.floor(Math.random() * 28)

  return {
    id: `Result ${(num + 1).toString()}`,
    selected: false,
    attributes: {
      created: moment(new Date(createdYear + year, 0, 1))
        .add(month, 'months')
        .add(day, 'days')
        .toDate(),

      modified: moment(new Date(modifiedYear + year, 0, 1)).toDate(),

      published_date: moment(new Date(publishedYear + year, 0, 1))
        .add(day, 'days')
        .toDate(),
    },
  }
}

export const createTestData = (n: number): TimelineItem[] => {
  if (typeof n !== 'number' || n < 1) {
    return []
  }

  return range(n).map(num => getDataPoint(num, 1980, 1983, 1987))
}

/**
 * Convert a given date to UTC to render correctly on the Timeline.
 *
 * @param value Moment time object.
 * @param timezone Timezone the incoming value is in.
 */
// TODO: Make this use the timezone
export const toUtc = (value: Date, format: string, timezone: string = '') => {
  const momentValue = moment.tz(value, timezone)
  const utcOffsetMinutes = momentValue.utcOffset()
  momentValue.add(utcOffsetMinutes, 'minutes').format(format)
  return momentValue.toDate()
}

/**
 *
 * @param time UTC time
 * @param timezone Timezone to convert the incoming value to.
 */
export const convertDateToTimezoneDate = (
  time: Date,
  format: string,
  timezone: string
): Date => {
  // console.log("Internal Date Clicked: ", moment(time).format(format))
  const momentValue = moment.tz(time, timezone)
  const utcOffsetMinutes = momentValue.utcOffset()
  momentValue.subtract(utcOffsetMinutes, 'minutes').format(format)
  console.log('New Date: ', momentValue)
  return momentValue.toDate()
}

export const formatDate = (value: Date, format: string, timezone: string) =>
  moment.tz(value, format, timezone).format(format)

export const dateWithinRange = (date: Date, range: Date[]) =>
  range[0] < date && date < range[1]
