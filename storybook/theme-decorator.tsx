import { select } from '@connexta/ace/@storybook/addon-knobs'
import { StoryDecorator } from '@storybook/react'
import * as React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Paper } from '../atoms/paper'
import { ThemeProvider as MuiThemeProvider } from '../atoms/theme'

type ColorMode = 'light' | 'dark'

const DefaultThemeProvider = (props: {
  children: any
  paletteType: string
}) => {
  const { paletteType, children } = props

  const styledTheme = {
    backgroundContent: paletteType === 'dark' ? '#253540' : '#f3fdff',
    theme: paletteType,
  }
  return (
    <StyledThemeProvider theme={styledTheme}>
      <MuiThemeProvider>
        <Paper style={{ padding: '40px' }}>{children}</Paper>
      </MuiThemeProvider>
    </StyledThemeProvider>
  )
}

export const withTheme: StoryDecorator = (Component: any) => {
  const themes = select(
    'Theme',
    {
      Light: ['light'],
      Dark: ['dark'],
      // Both: ['dark', 'light'], //TODO: Figure out how to show both at the same time.
    },
    ['light']
  ) as ColorMode[]

  return (
    <React.Fragment>
      {themes.map(t => {
        return (
          <DefaultThemeProvider paletteType={t}>
            <Component />
          </DefaultThemeProvider>
        )
      })}
    </React.Fragment>
  )
}
