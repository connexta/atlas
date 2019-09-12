import { select } from '@connexta/ace/@storybook/addon-knobs'
import * as React from 'react'
import { storiesOf } from '../../storybook'
import { Button } from './'

const stories = storiesOf('Components|Button', module)

stories.add('Default', () => {
  const variant = select(
    'Variant',
    {
      Text: 'text',
      Outlined: 'outlined',
      Contained: 'contained',
    },
    'outlined'
  ) as 'text' | 'outlined' | 'contained'

  const size = select(
    'Size',
    {
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
    },
    'small'
  ) as 'small' | 'medium' | 'large'

  const color = select(
    'Color',
    {
      Default: 'default',
      Inherit: 'inherit',
      Primary: 'primary',
      Secondary: 'secondary',
    },
    'default'
  ) as 'default' | 'inherit' | 'primary' | 'secondary'

  return (
    <Button variant={variant} size={size} color={color}>
      Click Me
    </Button>
  )
})
