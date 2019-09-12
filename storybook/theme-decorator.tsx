import { select } from '@connexta/ace/@storybook/addon-knobs'
import { StoryDecorator } from '@storybook/react'
import * as React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Paper } from '../atoms/paper'
import { ThemeProvider as MuiThemeProvider } from '../atoms/theme'

type ThemeProps = {
  children: any
}

const DefaultThemeProvider = (props: ThemeProps) => {
  const paletteType = select(
    'Theme',
    {
      Light: 'light',
      Dark: 'dark',
    },
    'dark'
  ) as 'light' | 'dark'

  const styledTheme = {
    backgroundContent: paletteType === 'dark' ? '#253540' : '#f3fdff',
    theme: paletteType,
  }

  return (
    <StyledThemeProvider theme={styledTheme}>
      <MuiThemeProvider>
        <Paper style={{ padding: '40px' }}>{props.children}</Paper>
      </MuiThemeProvider>
    </StyledThemeProvider>
  )
}

export const withTheme: StoryDecorator = (Component: any) => {
  return (
    <DefaultThemeProvider>
      <Component />
    </DefaultThemeProvider>
  )
}
