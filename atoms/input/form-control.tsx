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
  React.forwardRef((props: FormControlProps, ref) => {
    return <FormControl {...props} ref={(ref as unknown) as undefined} />
  })
)<FormControlProps>``

export const WrappedFormControlLabel = styled(
  React.forwardRef((props: FormControlLabelProps, ref) => {
    return <FormControlLabel {...props} ref={(ref as unknown) as undefined} />
  })
)<FormControlLabelProps>``

export const WrappedFormGroup = styled(
  React.forwardRef((props: FormGroupProps, ref) => {
    return <FormGroup {...props} ref={(ref as unknown) as undefined} />
  })
)<FormGroupProps>``

export const WrappedFormHelperText = styled(
  React.forwardRef((props: FormHelperTextProps, ref) => {
    return <FormHelperText {...props} ref={(ref as unknown) as undefined} />
  })
)<FormHelperTextProps>``

export const WrappedFormLabel = styled(
  React.forwardRef((props: FormLabelProps, ref) => {
    return <FormLabel {...props} ref={(ref as unknown) as undefined} />
  })
)<FormLabelProps>``
