import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import Button from './button'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        {text('label', '😀 😎 👍 💯')}
      </span>
    </Button>
  ))
