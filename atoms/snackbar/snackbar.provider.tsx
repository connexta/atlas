import * as React from 'react'
import {
  SnackbarProvider as Provider,
  withSnackbar as withSnackbarShadow,
  useSnackbar as useSnackbarShadow,
  WithSnackbarProps,
} from 'notistack'
import { Button } from '../button'
import { CloseIcon } from '../icons'

export const SnackbarProvider = Provider
export const withSnackbar = withSnackbarShadow
export const useSnackbar = useSnackbarShadow

export const generateDismissSnackbarAction = ({
  closeSnackbar,
}: {
  closeSnackbar: WithSnackbarProps['closeSnackbar']
}) => {
  return (key: string) => {
    return (
      <Button
        variant="text"
        color="inherit"
        onClick={() => {
          closeSnackbar(key)
        }}
      >
        <CloseIcon />
      </Button>
    )
  }
}
