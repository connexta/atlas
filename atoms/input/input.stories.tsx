import { storiesOf } from '../../storybook'
import * as React from 'react'
import { CreatableSelect } from './'
import { GroupOptions } from './autocomplete'

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
