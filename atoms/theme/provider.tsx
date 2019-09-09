import * as React from 'react'
import {
  createMuiTheme,
  createStyles,
  MuiThemeProvider as ThemeProvider,
} from '@material-ui/core/styles'
import { ThemeContext } from 'styled-components'
import { lighten } from 'polished'

export const Provider = ({ children }: { children: any }) => {
  const styledTheme = React.useContext(ThemeContext)
  if (styledTheme !== undefined) {
    const paperColor = lighten(0.1, styledTheme.backgroundContent)
    const theme = createMuiTheme({
      palette: {
        type: styledTheme.theme === 'dark' ? 'dark' : 'light',
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
  } else {
    const theme = createMuiTheme({
      palette: {
        type: 'light',
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
}
