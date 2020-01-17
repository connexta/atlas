import * as React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import styled from 'styled-components'

export const WrappedTextField = styled(
  React.forwardRef((props: TextFieldProps, ref: React.Ref<any>) => {
    return <TextField {...props} ref={ref} />
  })
)<TextFieldProps>`` as React.ComponentType<TextFieldProps>
