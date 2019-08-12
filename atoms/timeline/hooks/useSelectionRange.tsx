import { useState } from 'react'

const setSelectionRange = () => {}

export default function(defaultValue: Date[]) {
  const [value, setValue] = useState<Date[]>(defaultValue)
  console.log('Value: ', value)

  return [value, setValue]
}
