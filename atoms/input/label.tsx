import * as React from 'react'
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel'
import styled from 'styled-components'

export const WrappedInputLabel = styled(
  React.forwardRef((props: InputLabelProps, ref: React.Ref<any>) => {
    return <InputLabel {...props} ref={ref} />
  })
)<InputLabelProps>`` as React.ComponentType<InputLabelProps>
