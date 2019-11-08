import * as React from 'react'
import {
  createMuiTheme,
  MuiThemeProvider as ThemeProvider,
  darken,
  Theme as ThemeInterface,
  createStyles,
  lighten,
} from '@material-ui/core/styles'
import { ThemeContext } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { lighten as polishedLighten } from 'polished'

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

const GlobalStyles = createGlobalStyle<ThemeInterface>`
      a {
        color: ${props => props.palette.primary.dark};
      }
      .MuiToolbar-root a,
      .MuiToolbar-root .MuiBreadcrumbs-separator {
        color: ${props =>
          props.palette.getContrastText(props.palette.primary.main)};
      }
      .MuiDrawer-root a {
        color: ${props =>
          props.palette.getContrastText(props.palette.background.paper)};
      }
      @media (min-width: 600px) {
        .MuiListItemIcon-root {
          margin-left: 8px;
        }
      }
      .lm_header {
        z-index: 0 !important;
      }
      [role="tooltip"] {
        z-index: 101 !important;
        pointer-events: all !important;
      }
    `

export const Provider = ({ children }: { children: any }) => {
  const styledTheme = React.useContext(ThemeContext)
  const paperColor = polishedLighten(0.1, styledTheme.backgroundContent)
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
      h6: {
        fontSize: '1.2rem',
      },
      fontSize: 16,
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
    zIndex: {
      mobileStepper: 101,
      appBar: 101,
      drawer: 101,
      modal: 101,
      snackbar: 101,
      tooltip: 101,
    },
  })
  return (
    <>
      <GlobalStyles {...theme} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
