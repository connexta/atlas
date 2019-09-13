import { storiesOf } from '../../storybook'
import * as React from 'react'
import { CreatableSelect } from './'

const stories = storiesOf('Components | Input', module)

stories.add('AutoComplete', () => {
  return (
    <div style={{ maxWidth: '30%' }}>
      <CreatableSelect />
    </div>
  )
})
