import * as React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import styled from 'styled-components'

export const WrappedTextField = styled(
  React.forwardRef((props: TextFieldProps, ref) => {
    return <TextField {...props} ref={(ref as unknown) as undefined} />
  })
)<TextFieldProps>``
