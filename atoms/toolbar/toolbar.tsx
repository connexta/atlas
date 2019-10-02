import * as React from 'react'
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar'

import styled from 'styled-components'

export const WrappedToolbar = styled(
  React.forwardRef((props: ToolbarProps, ref: React.Ref<any>) => {
    return <Toolbar {...props} ref={ref} />
  })
)<ToolbarProps>`` as React.ComponentType<ToolbarProps>
