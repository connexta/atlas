import * as React from 'react'
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase'
import styled from 'styled-components'

export const WrappedInputBase = styled(
  React.forwardRef((props: InputBaseProps, ref: React.Ref<any>) => {
    return <InputBase {...props} ref={ref} />
  })
)<InputBaseProps>`` as React.ComponentType<InputBaseProps>
