import * as React from 'react'
import Select, { SelectProps } from '@material-ui/core/Select'
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem'
import styled from 'styled-components'

export const WrappedSelect = styled(
  React.forwardRef((props: SelectProps, ref) => {
    return <Select {...props} ref={(ref as unknown) as undefined} />
  })
)<SelectProps>``

export const WrappedMenuItem = styled(
  React.forwardRef((props: MenuItemProps, ref) => {
    //@ts-ignore
    return <MenuItem {...props} ref={(ref as unknown) as undefined} />
  })
)<MenuItemProps>``
