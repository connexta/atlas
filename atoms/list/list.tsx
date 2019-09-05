import * as React from 'react'
import List, { ListProps } from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon'
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText'
import styled from 'styled-components'

export const WrappedList = styled(
  React.forwardRef((props: ListProps, ref) => {
    return <List {...props} ref={(ref as unknown) as undefined} />
  })
)<ListProps>``

export const WrappedListItem = styled(
  React.forwardRef((props: ListItemProps, ref) => {
    // @ts-ignore
    return <ListItem {...props} ref={(ref as unknown) as undefined} />
  })
)<ListItemProps>``

export const WrappedListItemIcon = styled(
  React.forwardRef((props: ListItemIconProps, ref) => {
    return <ListItemIcon {...props} ref={(ref as unknown) as undefined} />
  })
)<ListItemIconProps>``

export const WrappedListItemText = styled(
  React.forwardRef((props: ListItemTextProps, ref) => {
    return <ListItemText {...props} ref={(ref as unknown) as undefined} />
  })
)<ListItemTextProps>``
