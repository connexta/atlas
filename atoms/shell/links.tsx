import * as React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { IconProps } from '@material-ui/core/Icon'
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shortName: {
      transition: theme.transitions.create(['opacity', 'transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
)

type ItemProps = {
  isSelected: boolean
  Icon: React.ComponentType<IconProps>
  shortName: string
  name: string
  onClick: () => void
}

const Item = ({
  isSelected,
  Icon,
  shortName,
  name,
  classes,
  open,
  onClick,
}: ItemProps & { open: boolean; classes: any }) => {
  return (
    <ListItem
      onClick={onClick}
      button
      selected={isSelected}
      tabIndex={-1}
      style={{ position: 'relative' }}
    >
      <ListItemIcon>
        {Icon ? (
          <>
            <Icon
              className={classes.shortName}
              style={{
                transform: open ? 'none' : 'translateY(-6px)',
              }}
            />
            <Typography
              className={classes.shortName}
              style={{
                opacity: open ? 0 : 1,
                fontSize: '.8rem',
                position: 'absolute',
                bottom: '2px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {shortName}
            </Typography>
          </>
        ) : (
          <></>
        )}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
}

type LinksProps = {
  items: ItemProps[]
}

export const Links = ({ items }: LinksProps) => {
  const classes = useStyles()
  return ({ open }: { open: boolean }) => {
    return (
      <List>
        {items.map(item => {
          return (
            <Item
              key={item.name}
              {...item}
              open={open}
              classes={classes}
              onClick={item.onClick}
            />
          )
        })}
      </List>
    )
  }
}
