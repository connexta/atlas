import * as React from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import DialogActions, {
  DialogActionsProps,
} from '@material-ui/core/DialogActions'
import DialogContent, {
  DialogContentProps,
} from '@material-ui/core/DialogContent'
import DialogContentText, {
  DialogContentTextProps,
} from '@material-ui/core/DialogContentText'
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle'
import styled from 'styled-components'

export const WrappedDialog = styled(
  React.forwardRef((props: DialogProps, ref) => {
    return <Dialog {...props} ref={(ref as unknown) as undefined} />
  })
)<DialogProps>``

export const WrappedDialogActions = styled(
  React.forwardRef((props: DialogActionsProps, ref) => {
    return <DialogActions {...props} ref={(ref as unknown) as undefined} />
  })
)<DialogActionsProps>``

export const WrappedDialogContent = styled(
  React.forwardRef((props: DialogContentProps, ref) => {
    return <DialogContent {...props} ref={(ref as unknown) as undefined} />
  })
)<DialogContentProps>``

export const WrappedDialogContentText = styled(
  React.forwardRef((props: DialogContentTextProps, ref) => {
    return <DialogContentText {...props} ref={(ref as unknown) as undefined} />
  })
)<DialogContentTextProps>``

export const WrappedDialogTitle = styled(
  React.forwardRef((props: DialogTitleProps, ref) => {
    return <DialogTitle {...props} ref={(ref as unknown) as undefined} />
  })
)<DialogTitleProps>``
