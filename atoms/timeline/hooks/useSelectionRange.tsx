import { useState } from 'react'

type Timescale = d3.ScaleTime<number, number>

const withinTimeScale = (newValues: Date[], timescale: Timescale) => {
  const domain = timescale.domain()
  if (newValues.length === 0) {
    return true
  } else if (newValues.length === 1) {
    return domain[0] < newValues[0] && newValues[0] < domain[1]
  } else if (newValues.length === 2) {
    return domain[0] < newValues[0] && newValues[1] < domain[1]
  } else {
    console.debug('selectionRange can have a maximum of two elements.')
    return false
  }
}

export default function(
  defaultValues: Date[],
  timescale: Timescale
): [Date[], (newValue: Date[]) => void] {
  const [values, setValues] = useState<Date[]>(defaultValues)
  const setSelectionRange = (newValues: Date[]) => {
    if (withinTimeScale(newValues, timescale)) {
      setValues(newValues)
    }
  }

  return [values, setSelectionRange]
}
