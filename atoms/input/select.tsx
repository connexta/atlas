import * as React from 'react'
import Select, { SelectProps } from '@material-ui/core/Select'
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem'
import styled from 'styled-components'

export const WrappedSelect = styled(
  React.forwardRef((props: SelectProps, ref: React.Ref<any>) => {
    return <Select {...props} ref={ref} />
  })
)<SelectProps>``

export const WrappedMenuItem = styled(
  React.forwardRef((props: MenuItemProps, ref: React.Ref<any>) => {
    //@ts-ignore
    return <MenuItem {...props} ref={ref} />
  })
)<MenuItemProps>``
