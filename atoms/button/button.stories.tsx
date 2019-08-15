import * as React from 'react'
import { storiesOf } from '@connexta/ace/@storybook/react'
import {
  withKnobs,
  select,
  boolean,
} from '@connexta/ace/@storybook/addon-knobs'
import Button from './button'

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('playground', () => {
    const emphasis = select('Emphasis', ['low', 'medium', 'high'], 'high')
    const color = select(
      'Color',
      ['neutral', 'primary', 'secondary'],
      'neutral'
    )
    const disabled = boolean('Disabled', false)
    return (
      <Button
        emphasis={emphasis}
        color={color}
        onClick={() => {
          alert('you clicked me')
        }}
        disabled={disabled}
      >
        Click Me
      </Button>
    )
  })
