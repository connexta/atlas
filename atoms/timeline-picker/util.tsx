//@ts-ignore
import moment from 'moment-timezone'

export type Data = {
  id: string
  attributes: {
    [key: string]: Date
  }
}

export const test_data: Data[] = Array.from(Array(20).keys()).map(num => {
  return {
    id: num.toString(),
    attributes: {
      created: moment(new Date(1990, 0, 1)).add(num, 'years'),
      modified: moment(new Date(1996, 0, 1)).add(num, 'years'),
    },
  }
})
