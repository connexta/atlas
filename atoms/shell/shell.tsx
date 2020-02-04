import * as React from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { MenuIcon, ChevronLeftIcon } from '../icons'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

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
  lowerLeftBackground?: string
  lowerLeftLogo?: string
  upperLeftLogo?: string
  menuIcon?: string
  Links: React.ComponentType<{ open: boolean }>
  BannerHeader?: React.ReactNode
  BannerFooter?: React.ReactNode
  Content: React.ReactNode
  Header: React.ReactNode
}

export const handleBase64EncodedImages = (url: string) => {
  if (url.startsWith('data:')) {
    return url
  }
  return `data:image/png;base64,${url}`
}

export const Shell = ({
  productImage,
  branding,
  productName,
  lowerLeftBackground,
  lowerLeftLogo,
  upperLeftLogo,
  menuIcon,
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
                style={{ height: 'auto', padding: menuIcon ? '0px' : '12px' }}
              >
                {menuIcon ? (
                  <>
                    <img
                      src={handleBase64EncodedImages(menuIcon)}
                      style={{ width: '51.42px' }}
                    />
                  </>
                ) : (
                  <MenuIcon />
                )}
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
                elevation: 4,
              }}
              open={open}
            >
              <div className={classes.toolbar}>
                {upperLeftLogo ? (
                  <>
                    <img
                      className={classes.branding}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        padding: '5px',
                      }}
                      src={handleBase64EncodedImages(upperLeftLogo)}
                    />
                  </>
                ) : (
                  <Grid container direction="column">
                    <Grid item>
                      <Typography>{branding}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{productName}</Typography>
                    </Grid>
                  </Grid>
                )}

                <IconButton
                  onClick={handleDrawerClose}
                  disabled={open === false}
                >
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <Links open={open} />

              <Divider />
              <>
                <div
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                    height: '100%',
                  }}
                >
                  {lowerLeftBackground ? (
                    <img
                      className={classes.branding}
                      style={{
                        height: '100%',
                        opacity: 0.4,
                        transform: 'scale(2)',
                        position: 'absolute',
                        zIndex: -1,
                      }}
                      src={handleBase64EncodedImages(lowerLeftBackground)}
                    />
                  ) : null}
                  <a
                    href="../"
                    style={{
                      padding: '0px',
                      background: 'transparent',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <img
                      className={classes.branding}
                      style={{
                        width: open ? `${drawerWidth - 20}px` : '52px',
                        padding: open ? `20px` : '5px',
                      }}
                      src={handleBase64EncodedImages(
                        lowerLeftLogo || productImage
                      )}
                    />
                  </a>
                </div>
              </>
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
