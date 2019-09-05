import * as React from 'react'
import Popper, { PopperProps } from '@material-ui/core/Popper'
import styled from 'styled-components'

export const WrappedPopper = styled(
  React.forwardRef((props: PopperProps, ref) => {
    return <Popper {...props} popperref={(ref as unknown) as undefined} />
  })
)<PopperProps>``
