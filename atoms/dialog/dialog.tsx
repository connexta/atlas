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
  React.forwardRef((props: DialogProps, ref: React.Ref<any>) => {
    return <Dialog {...props} ref={ref} />
  })
)<DialogProps>``

export const WrappedDialogActions = styled(
  React.forwardRef((props: DialogActionsProps, ref: React.Ref<any>) => {
    return <DialogActions {...props} ref={ref} />
  })
)<DialogActionsProps>``

export const WrappedDialogContent = styled(
  React.forwardRef((props: DialogContentProps, ref: React.Ref<any>) => {
    return <DialogContent {...props} ref={ref} />
  })
)<DialogContentProps>``

export const WrappedDialogContentText = styled(
  React.forwardRef((props: DialogContentTextProps, ref: React.Ref<any>) => {
    return <DialogContentText {...props} ref={ref} />
  })
)<DialogContentTextProps>``

export const WrappedDialogTitle = styled(
  React.forwardRef((props: DialogTitleProps, ref: React.Ref<any>) => {
    return <DialogTitle {...props} ref={ref} />
  })
)<DialogTitleProps>``
