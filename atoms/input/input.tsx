import * as React from 'react'
import OutlinedInput, {
  OutlinedInputProps,
} from '@material-ui/core/OutlinedInput'
import styled from 'styled-components'

export const WrappedOutlinedInput = styled(
  React.forwardRef((props: OutlinedInputProps, ref: React.Ref<any>) => {
    return <OutlinedInput {...props} ref={ref} />
  })
)<OutlinedInputProps>``
