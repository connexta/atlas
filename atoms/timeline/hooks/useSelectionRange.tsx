import { useState } from 'react'

type Timescale = d3.ScaleTime<number, number>

const withinTimeScale = (newValues: Date[], timescale: Timescale) => {
  const domain = timescale.domain()
  return domain[0] < newValues[0] && newValues[1] < domain[1]
}

export default function(
  defaultValues: Date[],
  timescale: Timescale
): [Date[], (newValue: Date[]) => void] {
  const [values, setValues] = useState<Date[]>(defaultValues)
  const setSelectionRange = (newValues: Date[]) => {
    if (newValues.length == 0 || withinTimeScale(newValues, timescale)) {
      setValues(newValues)
    }
  }

  return [values, setSelectionRange]
}
