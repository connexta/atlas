import * as React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton'
import Badge, { BadgeProps } from '@material-ui/core/Badge'

import styled from 'styled-components'

export const WrappedButton = styled(
  React.forwardRef((props: ButtonProps, ref: React.Ref<any>) => {
    return <Button {...props} ref={ref} />
  })
)<ButtonProps>`` as React.ComponentType<ButtonProps>

export const WrappedIconButton = styled(
  React.forwardRef((props: IconButtonProps, ref: React.Ref<any>) => {
    return <IconButton {...props} ref={ref} />
  })
)<IconButtonProps>`` as React.ComponentType<IconButtonProps>

export const WrappedBadge = styled(
  React.forwardRef((props: BadgeProps, ref: React.Ref<any>) => {
    return <Badge {...props} ref={ref} />
  })
)<BadgeProps>`` as React.ComponentType<BadgeProps>
