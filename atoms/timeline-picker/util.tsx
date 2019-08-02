//@ts-ignore
import moment from 'moment-timezone'

export type Data = {
  id: string
  attributes: {
    [key: string]: Date
  }
}

/** Python's "range" function */
export const range = (n: number) => Array.from(Array(n).keys())

const getDataPoint = (
  num: number,
  createdYear: number,
  modifiedYear: number
) => {
  const month = Math.floor(Math.random() * 12)
  const year = Math.floor(Math.random() * 40)

  return {
    id: (num + 1).toString(),
    attributes: {
      created: moment(new Date(createdYear + year, 0, 1))
        .add(month, 'months')
        .toDate(),
      modified: moment(new Date(modifiedYear + year, 0, 1))
        .add(num, 'years')
        .toDate(),
    },
  }
}

export const test_data = (n: number): Data[] => {
  if (typeof n !== 'number' || n < 1) {
    return []
  }

  return range(n).map(num => getDataPoint(num, 1980, 1986))
}
