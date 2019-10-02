import * as React from 'react'
import AppBar, { AppBarProps } from '@material-ui/core/AppBar'

import styled from 'styled-components'

export const WrappedAppBar = styled(
  React.forwardRef((props: AppBarProps, ref: React.Ref<any>) => {
    return <AppBar {...props} ref={ref} />
  })
)<AppBarProps>`` as React.ComponentType<AppBarProps>
