import { select } from '@connexta/ace/@storybook/addon-knobs'
import { StoryDecorator } from '@storybook/react'
import * as React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Paper } from '../atoms/paper'
import { ThemeProvider as MuiThemeProvider } from '../atoms/theme'
import { ThemeColorInterface, ThemeName } from '../styled/theme'

type ColorMode = 'light' | 'dark'

const darkTheme: ThemeColorInterface = {
  primaryColor: '#32a6ad',
  positiveColor: '#5b963e',
  negativeColor: '#943838',
  warningColor: '#decd39',
  favoriteColor: '#d1d179',
  backgroundNavigation: '#213137',
  backgroundAccentContent: '#34434c',
  backgroundDropdown: '#253540',
  backgroundContent: '#253540',
  backgroundModal: '#253540',
  backgroundSlideout: '#435059',
}

const lightTheme: ThemeColorInterface = {
  primaryColor: '#3c6dd5',
  positiveColor: '#428442',
  negativeColor: '#8a423c',
  warningColor: '#c89600',
  favoriteColor: '#d1d179',
  backgroundNavigation: '#3c6dd5',
  backgroundAccentContent: '#edf9fc',
  backgroundDropdown: '#f3fdff',
  backgroundContent: '#f3fdff',
  backgroundModal: '#edf9fc',
  backgroundSlideout: '#edf9fc',
}

const DefaultThemeProvider = (props: {
  children: any
  paletteType: string
}) => {
  const { paletteType, children } = props

  let styledTheme: ThemeColorInterface & ThemeName
  if (paletteType === 'dark') {
    styledTheme = {
      ...darkTheme,
      theme: paletteType,
    }
  } else {
    styledTheme = {
      ...lightTheme,
      theme: paletteType,
    }
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
