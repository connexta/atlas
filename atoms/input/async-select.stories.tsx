import { storiesOf } from '../../storybook'
import * as React from 'react'
import { AsyncSelect } from './'
import { number } from '@connexta/ace/@storybook/addon-knobs'
import { action } from '@connexta/ace/@storybook/addon-actions'

const stories = storiesOf('Components | Input', module)

stories.add('Async Select', () => {
  const debounceInMsKnob = number('Debounce (ms)', 500)
  const networkInMs = number('Network Time (ms)', 1000)

  const loadOptions = (input: any, callback: any) => {
    const suggestions = [
      { label: 'Person 1', value: 'value 1' },
      { label: 'Person 2', value: 'value 2' },
      { label: 'Person 3', value: 'value 3' },
      { label: 'Person 4', value: 'value 4' },
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
      <AsyncSelect
        label="Choose an option"
        debounce={debounceInMsKnob}
        onInputChange={(value: any) => {
          action('onInputChange')(value)
        }}
        onChange={(value: any) => {
          action('onChange')(value)
        }}
        loadOptions={loadOptions}
      />
    </div>
  )
})
