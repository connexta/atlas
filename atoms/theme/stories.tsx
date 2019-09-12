import {
  createMuiTheme,
  MuiThemeProvider as ThemeProvider,
} from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import * as React from 'react'
import { Paper } from '../paper'

type ThemeProps = {
  paletteType: 'light' | 'dark'
  children: any
}

export const StoryThemeProvider = (props: ThemeProps) => {
  const { paletteType } = props

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
      primary: {
        main: paletteType === 'light' ? blue[700] : '#69E1E8',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ display: 'inline-block', padding: '40px' }}>
        {props.children}
      </Paper>
    </ThemeProvider>
  )
}
