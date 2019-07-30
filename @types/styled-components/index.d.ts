/// <reference types="node" />

declare module 'styled-components' {
  export type ThemedStyledComponentsModule<ThemeInterface> = {
    default: any
    ThemeProvider: any
    keyframes: any
    withTheme: any
    createGlobalStyle: any
    css: any
  }
  export type ThemeProps<ThemeInterface> = {}
  export type FlattenInterpolation<ThemeProps> = {}
}
