import * as React from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Typography,
  Divider,
} from '@material-ui/core'
import { MenuIcon, ChevronLeftIcon } from '../icons'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
      marginLeft: '16px',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '8px',
      },
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    branding: {
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
)

type ShellProps = {
  productImage: string
  productName: string
  branding: string
  Links: React.ComponentType<{ open: boolean }>
  BannerHeader?: React.ReactNode
  BannerFooter?: React.ReactNode
  Content: React.ReactNode
  Header: React.ReactNode
}

export const Shell = ({
  productImage,
  branding,
  productName,
  Links,
  BannerFooter,
  BannerHeader,
  Content,
  Header,
}: ShellProps) => {
  let previousData = localStorage.getItem('shell.drawer')
  let defaultOpen = true
  if (previousData !== null) {
    defaultOpen = previousData === 'true'
  }
  const classes = useStyles()
  const [open, setOpen] = React.useState(defaultOpen)

  function handleDrawerOpen() {
    localStorage.setItem('shell.drawer', 'true')
    setOpen(true)
  }

  function handleDrawerClose() {
    localStorage.setItem('shell.drawer', 'false')
    setOpen(false)
  }

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      wrap="nowrap"
      style={{ height: '100%', width: '100%', overflow: 'hidden' }}
    >
      <Grid item style={{ width: '100%' }}>
        {BannerHeader}
      </Grid>
      <Grid
        item
        style={{
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <Grid
          container
          direction="row"
          wrap="nowrap"
          alignItems="stretch"
          style={{ height: '100%', width: '100%' }}
        >
          <AppBar
            component="div" // usually it's header, but we have styling that clashes, eventually we can remove this
            position="absolute"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar style={{ height: '64px' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
                style={{ height: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              {Header}
            </Toolbar>
          </AppBar>

          <Grid item>
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
              PaperProps={{
                style: {
                  position: 'absolute',
                },
              }}
              open={open}
            >
              <div className={classes.toolbar}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography>{branding}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{productName}</Typography>
                  </Grid>
                </Grid>

                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <Links open={open} />

              <Divider />
              <div style={{ marginTop: 'auto', padding: '10px' }}>
                <a
                  href="../"
                  style={{ padding: '0px', background: 'transparent' }}
                >
                  <img
                    className={classes.branding}
                    style={{
                      width: open ? `${drawerWidth - 20}px` : '52px',
                    }}
                    src={`data:image/png;base64,${productImage}`}
                  />
                </a>
              </div>
            </Drawer>
          </Grid>
          <Grid
            item
            style={{
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <Grid
              container
              component="main"
              direction="column"
              alignItems="stretch"
              wrap="nowrap"
              style={{ height: '100%', width: '100%' }}
            >
              <Grid
                item
                className={classes.toolbar}
                style={{ flexShrink: 0 }}
              />
              <Grid
                item
                style={{
                  padding: '20px 40px',
                  flexGrow: 1,
                  overflow: 'hidden',
                }}
              >
                <Grid
                  /**
                   * Doing this to reset grids to a more sane default for whatever is passed into Content
                   */
                  container
                  spacing={0}
                  wrap="wrap"
                  style={{ height: '100%', width: '100%' }}
                >
                  <Grid item style={{ height: '100%', width: '100%' }}>
                    {Content}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        {BannerFooter}
      </Grid>
    </Grid>
  )
}
