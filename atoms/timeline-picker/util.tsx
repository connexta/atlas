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

export const test_data = (n: number): Data[] => {
  if (typeof n !== 'number' || n < 1) {
    return []
  }

  return range(n).map(num => {
    return {
      id: (num + 1).toString(),
      attributes: {
        created: moment(new Date(1981, 0, 1)).add(num, 'months'),
        modified: moment(new Date(1986, 0, 1)).add(num, 'years'),
      },
    }
  })
}
