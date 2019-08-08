import { default as OriginalButton } from '@material-ui/core/Button'
import * as React from 'react'
import { ButtonProps } from '@material-ui/core/Button'
import { ThemeInterface } from '../../styled'
import { withTheme } from 'styled-components'
import { Omit } from '../../typescript'

type Emphasis = 'low' | 'medium' | 'high'
type Color = 'primary' | 'secondary' | 'neutral'

type TrimmedMUIProps = Omit<ButtonProps, 'variant' | 'color'>

type OurProps = TrimmedMUIProps & {
  /**
   * description: hello
   */
  theme: ThemeInterface
  /**
   * @description Used to set the overall style
   */
  emphasis?: Emphasis
  /**
   * @description Used to
   */
  color?: Color
}

const mapEmphasisToMUI = (emphasis?: Emphasis) => {
  let variant: 'text' | 'outlined' | 'contained' = 'text'
  switch (emphasis) {
    case 'low':
      variant = 'text'
      break
    case 'medium':
      variant = 'outlined'
      break
    case 'high':
      variant = 'contained'
      break
  }
  return { variant }
}

const mapColorToMUI = (customColor?: Color) => {
  let color: 'primary' | 'secondary' | 'default' = 'default'
  switch (customColor) {
    case 'primary':
      color = 'primary'
      break
    case 'secondary':
      color = 'secondary'
      break
    case 'neutral':
      color = 'default'
      break
  }
  return { color }
}

const mapPropsToMUI = (props: OurProps) => {
  const { emphasis, color, ...otherProps } = props
  return {
    ...mapEmphasisToMUI(emphasis),
    ...mapColorToMUI(color),
    ...mapThemeToMUI(props.theme),
    ...otherProps,
  }
}

const mapThemeToMUI = (_theme: ThemeInterface) => {
  return {}
}

export const Button: React.ComponentClass<any> = withTheme(
  (props: OurProps) => {
    const MUIProps = {
      ...mapPropsToMUI(props),
    }
    return <OriginalButton {...MUIProps} />
  }
)

export default Button
