import * as React from 'react'
import { storiesOf } from '@connexta/ace/@storybook/react'
import { CircularProgress, LinearProgress } from './'
import { select, number } from '@connexta/ace/@storybook/addon-knobs'

const stories = storiesOf('Components | Progress', module)

stories.add('Circular Progress', () => {
  const color = select(
    'Color',
    {
      Inherit: 'inherit',
      Primary: 'primary',
      Secondary: 'secondary',
    },
    'default'
  ) as 'inherit' | 'primary' | 'secondary'

  const variant = select(
    'Variant',
    {
      Indeterminate: 'indeterminate',
      Determinate: 'determinate',
      Static: 'static',
    },
    'indeterminate'
  ) as 'indeterminate' | 'determinate' | 'static'

  const size = number('Size', 100)
  const value = number('Value', 50)
  const thickness = number('Thickness', 2)

  return (
    <CircularProgress
      variant={variant}
      color={color}
      size={size}
      value={value}
      thickness={thickness}
    />
  )
})

stories.add('Linear Progress', () => {
  return <LinearProgress />
})
