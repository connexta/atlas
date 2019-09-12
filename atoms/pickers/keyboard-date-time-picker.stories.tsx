import { select, text } from '@connexta/ace/@storybook/addon-knobs'
import { storiesOf } from '@connexta/ace/@storybook/react'
import * as React from 'react'
import { ThemeContext } from 'styled-components'
import { StoryThemeProvider } from '../theme/stories'
import { KeyboardDateTimePicker } from './'

const stories = storiesOf('Components | Date Time', module)

stories.add('KeyboardDateTimePicker', () => {
  const [value, setValue] = React.useState<Date | null>(null)

  const paletteType = select(
    'Theme',
    {
      Light: 'light',
      Dark: 'dark',
    },
    'dark'
  ) as 'light' | 'dark'

  const variant = select(
    'Variant',
    {
      Dialog: 'dialog',
      Inline: 'inline',
      Static: 'static',
    },
    'dialog'
  ) as 'dialog' | 'inline' | 'static'

  const inputVariant = select(
    'Input Variant',
    {
      Outlined: 'outlined',
      Standard: 'standard',
      Filled: 'filled',
    },
    'outlined'
  ) as 'outlined' | 'standard' | 'filled'

  const margin = select(
    'Margin',
    {
      Normal: 'normal',
      Dense: 'dense',
      None: 'none',
    },
    'outlined'
  ) as 'normal' | 'dense' | 'none'

  const format = text('Date Format', 'DD MMMM YYYY h:mm a Z')

  // const themeContext = React.useContext(ThemeContext)
  // console.log('Current theme: ', themeContext)

  return (
    <StoryThemeProvider paletteType={paletteType}>
      <KeyboardDateTimePicker
        style={{ width: '400px' }}
        variant={variant}
        inputVariant={inputVariant}
        margin={margin}
        format={format}
        label="Choose Date"
        onChange={(v: any) => setValue(v)}
        value={value}
      />
    </StoryThemeProvider>
  )
})
