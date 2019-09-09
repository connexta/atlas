import { select } from '@connexta/ace/@storybook/addon-knobs'
import { storiesOf } from '@connexta/ace/@storybook/react'
import * as React from 'react'
import { FormControl, MenuItem, OutlinedSelect } from './'

const stories = storiesOf('Components | Select', module)

stories.add('OutlinedSelect', () => {
  const [value, setValue] = React.useState()

  const margin = select(
    'Margin',
    {
      Normal: 'normal',
      Dense: 'dense',
      None: 'none',
    },
    'outlined'
  ) as 'normal' | 'dense' | 'none'

  return (
    <FormControl
      variant="outlined"
      margin={margin}
      style={{ minWidth: '100px' }}
    >
      <OutlinedSelect
        value={value}
        onChange={e => setValue(e.target.value)}
        label="Select"
      >
        <MenuItem value={''}>Reset</MenuItem>
        <MenuItem value={'1'}>Choice 1</MenuItem>
        <MenuItem value={'2'}>Choice 2</MenuItem>
      </OutlinedSelect>
    </FormControl>
  )
})
