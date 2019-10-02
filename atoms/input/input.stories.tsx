import { storiesOf } from '../../storybook'
import * as React from 'react'
import { CreatableSelect, AsyncCreatableSelect } from './'
import { GroupOptions } from './autocomplete'
import { number } from '@connexta/ace/@storybook/addon-knobs'
import { action } from '@connexta/ace/@storybook/addon-actions'

const stories = storiesOf('Components | Input', module)

stories.add('AutoComplete', () => {
  const [selectValues, setSelectValues] = React.useState([])
  const [suggestions, setSuggestions] = React.useState<GroupOptions[]>([])

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

stories.add('AutoComplete (Async)', () => {
  const [selectValues, setSelectValues] = React.useState([])

  const debounceInMsKnob = number('Debounce (ms)', 500)
  const networkInMs = number('Network Time (ms)', 1000)

  const getOptions = (input: any, callback: any) => {
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
      action('Making Network Request')()
      setTimeout(() => {
        action('Network Request Resolved with: ')(suggestions)
        resolve(suggestions)
      }, networkInMs)
    }).then(result => callback(result))
  }

  return (
    <div style={{ maxWidth: '30%' }}>
      <AsyncCreatableSelect
        isMulti
        value={selectValues}
        onChange={(values: any) => setSelectValues(values)}
        loadOptions={getOptions}
        debounce={debounceInMsKnob}
      />
    </div>
  )
})
