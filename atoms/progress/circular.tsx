import * as React from 'react'
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

export const WrappedCircularProgress = styled(
  React.forwardRef((props: CircularProgressProps, ref) => {
    return <CircularProgress {...props} ref={(ref as unknown) as undefined} />
  })
)<CircularProgressProps>``
