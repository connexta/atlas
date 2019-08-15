import { isEqual } from 'lodash'
import { useState, useEffect } from 'react'
import { Timescale } from './types'

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

export const useSelectionRange = (
  defaultValues: Date[],
  timescale: Timescale
): [Date[], (newValue: Date[]) => void] => {
  const [values, setValues] = useState<Date[]>(defaultValues)
  const setSelectionRange = (newValues: Date[]) => {
    if (withinTimeScale(newValues, timescale)) {
      setValues(newValues)
    }
  }

  return [values, setSelectionRange]
}

export const usePoller = (fn: () => any) => {
  const [state, setState] = useState(fn())

  useEffect(() => {
    let id: any = null
    let value: any = state

    const loop = () => {
      const nextValue = fn()
      if (!isEqual(value, nextValue)) {
        value = nextValue
        setState(nextValue)
      }

      id = window.requestAnimationFrame(loop)
    }

    id = window.requestAnimationFrame(loop)

    return () => {
      if (id !== null) {
        window.cancelAnimationFrame(id)
      }
    }
  }, [])

  return state
}
