import * as React from 'react'
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel'
import styled from 'styled-components'

export const WrappedInputLabel = styled(
  React.forwardRef((props: InputLabelProps, ref) => {
    return <InputLabel {...props} ref={(ref as unknown) as undefined} />
  })
)<InputLabelProps>``
