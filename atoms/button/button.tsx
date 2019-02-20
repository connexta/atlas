import Button from '@material-ui/core/Button'
import * as React from 'react'
import { ButtonProps } from '@material-ui/core/Button'

export const WrappedButton = (props: ButtonProps) => {
  return <Button {...props} />
}

export default WrappedButton
