import * as React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import ChipInput, { Props as ChipInputProps } from 'material-ui-chip-input'
import styled from 'styled-components'

export const WrappedTextField = styled(
  React.forwardRef((props: TextFieldProps, ref: React.Ref<any>) => {
    return <TextField {...props} ref={ref} />
  })
)<TextFieldProps>`` as React.ComponentType<TextFieldProps>

export const WrappedChipInput = styled(
  React.forwardRef((props: ChipInputProps, ref: React.Ref<any>) => {
    return <ChipInput {...props} ref={ref} />
  })
)<ChipInputProps>`` as React.ComponentType<TextFieldProps>
