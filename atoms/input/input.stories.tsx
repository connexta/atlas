import { storiesOf } from '@connexta/ace/@storybook/react'
import * as React from 'react'
import { CreatableSelect } from './'

const stories = storiesOf('Components | Input', module)

stories.add('AutoComplete', () => {
  return (
    <div>
      <CreatableSelect />
    </div>
  )
})
