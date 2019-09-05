import * as React from 'react'
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar'
import SnackbarContent, {
  SnackbarContentProps,
} from '@material-ui/core/SnackbarContent'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'

type ExtraProps = {
  variant?: 'error' | 'success'
}

export const WrappedSnackbar = styled(
  React.forwardRef((props: SnackbarProps & ExtraProps, ref) => {
    return <Snackbar {...props} ref={(ref as unknown) as undefined} />
  })
)<SnackbarProps>``

export const WrappedSnackbarContent = styled(
  React.forwardRef((props: SnackbarContentProps & ExtraProps, ref) => {
    const theme = useTheme()
    const { variant = 'error', ...baseProps } = props
    let style = {}
    if (variant === 'error') {
      style = {
        background: theme.palette.error.dark,
        color: theme.palette.error.contrastText,
      }
    } else if (variant === 'success') {
      style = {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      }
    }
    return (
      <SnackbarContent
        {...baseProps}
        ref={(ref as unknown) as undefined}
        style={style}
      />
    )
  })
)<SnackbarContentProps>``
