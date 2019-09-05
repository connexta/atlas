import * as React from 'react'
import LinearProgress, {
  LinearProgressProps,
} from '@material-ui/core/LinearProgress'
import styled from 'styled-components'

export const WrappedLinearProgress = styled(
  React.forwardRef((props: LinearProgressProps, ref) => {
    return <LinearProgress {...props} ref={(ref as unknown) as undefined} />
  })
)<LinearProgressProps>``
