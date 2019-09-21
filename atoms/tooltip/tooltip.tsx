import * as React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import styled from 'styled-components'

export const WrappedTooltip = styled((props: TooltipProps) => {
  return <Tooltip {...props} />
})<TooltipProps>`` as React.ComponentType<TooltipProps>
