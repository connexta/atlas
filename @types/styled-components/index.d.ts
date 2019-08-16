// import original module declarations
import 'styled-components'
import * as React from 'react'
import { ThemeInterface } from '../../styled'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}

  export function keyframes(
    strings: TemplateStringsArray,
    ...interpolations: FlattenInterpolation<ThemeProps<ThemeInterface>>[]
  ): Keyframes
  export const ThemeContext: React.Context<DefaultTheme>
}
