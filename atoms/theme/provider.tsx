import * as React from 'react'
import {
  createMuiTheme,
  createStyles,
  MuiThemeProvider as ThemeProvider,
} from '@material-ui/core/styles'
import { ThemeContext } from 'styled-components'
import { lighten } from 'polished'
import { blue } from '@material-ui/core/colors'

type Theme = {
  primary: string
  secondary?: string
}

const dark: Theme = {
  primary: '#69E1E8',
}

const light: Theme = {
  primary: '#3c6dd5',
}

export const Provider = ({ children }: { children: any }) => {
  const styledTheme = React.useContext(ThemeContext)
  const paperColor = lighten(0.1, styledTheme.backgroundContent)
  const theme = createMuiTheme({
    palette: {
      type: styledTheme.theme === 'dark' ? 'dark' : 'light',
      primary: {
        main: styledTheme.theme === 'dark' ? dark.primary : light.primary,
      },
      background: {
        paper: paperColor,
      },
    },
    typography: {
      fontSize: 14,
    },
    overrides: {
      MuiCardActionArea: createStyles({
        root: {
          height: 'auto',
        },
      }),
      MuiCardHeader: createStyles({
        content: {
          minWidth: '0px',
        },
      }),
      MuiTooltip: createStyles({
        tooltip: {
          fontSize: '1rem',
        },
      }),
    },
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
