import * as React from 'react'
import List, { ListProps } from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText'
import styled from 'styled-components'

export const WrappedList = styled(
  React.forwardRef((props: ListProps, ref: React.Ref<any>) => {
    return <List {...props} ref={ref} />
  })
)<ListProps>`` as React.ComponentType<ListProps>

export const WrappedListItem = styled(
  React.forwardRef((props: ListItemProps, ref: React.Ref<any>) => {
    // @ts-ignore
    return <ListItem {...props} ref={ref} />
  })
)<ListItemProps>`` as React.ComponentType<ListItemProps>

export const WrappedListItemIcon = ListItemIcon

export const WrappedListItemText = styled(
  React.forwardRef((props: ListItemTextProps, ref: React.Ref<any>) => {
    return <ListItemText {...props} ref={ref} />
  })
)<ListItemTextProps>`` as React.ComponentType<ListItemTextProps>
