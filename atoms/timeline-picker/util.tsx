//@ts-ignore
import moment from 'moment-timezone'

export type Data = {
  id: string
  attributes: {
    [key: string]: Date
  }
}

export const test_data = (numData: number): Data[] => {
  if (typeof numData !== 'number' || numData < 1) {
    return []
  }

  return Array.from(Array(numData).keys()).map(num => {
    return {
      id: num.toString(),
      attributes: {
        created: moment(new Date(1981, 0, 1)).add(num, 'years'),
        modified: moment(new Date(1986, 0, 1)).add(num, 'years'),
      },
    }
  })
}
