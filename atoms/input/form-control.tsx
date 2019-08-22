import * as React from 'react'
import FormControl, { FormControlProps } from '@material-ui/core/FormControl'
import FormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel'
import FormGroup, { FormGroupProps } from '@material-ui/core/FormGroup'
import FormHelperText, {
  FormHelperTextProps,
} from '@material-ui/core/FormHelperText'
import FormLabel, { FormLabelProps } from '@material-ui/core/FormLabel'

import styled from 'styled-components'

export const WrappedFormControl = styled(
  React.forwardRef((props: FormControlProps, ref: React.Ref<any>) => {
    return <FormControl {...props} ref={ref} />
  })
)<FormControlProps>``

export const WrappedFormControlLabel = styled(
  React.forwardRef((props: FormControlLabelProps, ref: React.Ref<any>) => {
    return <FormControlLabel {...props} ref={ref} />
  })
)<FormControlLabelProps>``

export const WrappedFormGroup = styled(
  React.forwardRef((props: FormGroupProps, ref: React.Ref<any>) => {
    return <FormGroup {...props} ref={ref} />
  })
)<FormGroupProps>``

export const WrappedFormHelperText = styled(
  React.forwardRef((props: FormHelperTextProps, ref: React.Ref<any>) => {
    return <FormHelperText {...props} ref={ref} />
  })
)<FormHelperTextProps>``

export const WrappedFormLabel = styled(
  React.forwardRef((props: FormLabelProps, ref: React.Ref<any>) => {
    return <FormLabel {...props} ref={ref} />
  })
)<FormLabelProps>``
