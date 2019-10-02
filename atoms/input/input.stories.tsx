import { storiesOf } from '../../storybook'
import * as React from 'react'
import { CreatableSelect, AsyncCreatableSelect } from './'
import { GroupOptions } from './autocomplete'
const debounce = require('lodash.debounce')

const stories = storiesOf('Components | Input', module)

stories.add('AutoComplete', () => {
  const [selectValues, setSelectValues] = React.useState([])
  const [suggestions, setSuggestions] = React.useState<GroupOptions[]>([])

  console.log('Suggestions: ', suggestions)

  return (
    <div style={{ maxWidth: '30%' }}>
      <CreatableSelect
        isMulti
        value={selectValues}
        onChange={(values: any) => setSelectValues(values)}
        onInputChange={() => {
          setSuggestions([
            {
              label: 'Group 1',
              options: [{ label: 'Person 1', value: 'value 1' }],
            },
            {
              label: 'Group 2',
              options: [{ label: 'Person 2', value: 'value 2' }],
            },
          ])
        }}
        options={suggestions}
      />
    </div>
  )
})

const debouncedFetch = debounce((searchTerm: any, callback: any) => {
  const suggestions = [
    {
      label: 'Group 1',
      options: [{ label: 'Person 1', value: 'value 1' }],
    },
    {
      label: 'Group 2',
      options: [{ label: 'Person 2', value: 'value 2' }],
    },
  ]

  new Promise(resolve => {
    setTimeout(() => {
      console.log('Making Network Request')
      resolve(suggestions)
    }, 1000)
  }).then(result => callback(result))
}, 500)

stories.add('AutoComplete (Async)', () => {
  const [selectValues, setSelectValues] = React.useState([])

  const getOptions = (input: any, callback: any) => {
    return debouncedFetch(input, callback)
  }

  return (
    <div style={{ maxWidth: '30%' }}>
      <AsyncCreatableSelect
        isMulti
        value={selectValues}
        onChange={(values: any) => setSelectValues(values)}
        loadOptions={getOptions}
      />
    </div>
  )
})
