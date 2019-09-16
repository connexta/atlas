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
export const toUtc = (value: Date, timezone: string = '') =>
  moment.tz(value, timezone).toDate()

/**
 *
 * @param time UTC time
 * @param timezone Timezone to convert the incoming value to.
 */
export const convertDateToTimezoneDate = (
  time: Date,
  timezone: string = ''
): Date => moment.tz(time, timezone).toDate()

export const formatDate = (value: Date) =>
  moment(value).format('DD MMMM YYYY h:mm a Z')

export const dateWithinRange = (date: Date, range: Date[]) =>
  range[0] < date && date < range[1]
