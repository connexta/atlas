import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import Button from './button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('playground', () => {
    const emphasis = select('Emphasis', ['low', 'medium', 'high'], 'low')
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
        Playground
      </Button>
    )
  })
