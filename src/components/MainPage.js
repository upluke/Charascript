import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import initialData from '../database/allData'
import Name from './Name'
import Profile from './Profile'
import Colection from './Collection'

const drawerWidth = 270

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#2A363B',
    color: '#fff',
  },
  appBar: {
    background: '#99B898',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    background: '#A8A7A7',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color: '#fff',
    background: '#A8A7A7',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    padding: theme.spacing(5),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nameAndProfileContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
}))

export default () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const [data, setData] = useState(initialData)
  const [characters, setCharacters] = useState([])
  const [profiles, setProfiles] = useState([])

  // styling functions
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  // get names from colections
  const getCollectionNamesAndProfiles = (characters) => {
    let tmpChas = initialData.names.reduce((accumulator, name) => {
      if (characters.includes(name.profileId)) {
        accumulator.push(name)
      }
      return accumulator
    }, [])

    setCharacters(tmpChas)

    let tmpProfs = initialData.profiles.reduce((accumulator, profile) => {
      if (characters.includes(profile.profileId)) {
        accumulator.push(profile)
      }
      return accumulator
    }, [])

    setProfiles(tmpProfs)
  }

  console.log('char: ', characters)
  console.log('profle: ', profiles)

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* header component */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuBookIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Charascript
          </Typography>
        </Toolbar>
      </AppBar>
      {/* drawer component */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItem>
            <ListItemText>Literature</ListItemText>
          </ListItem>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />
        <List>
          {initialData.collections.map((collection, index) => {
            const text = collection.collectionName
            return (
              <ListItem button key={text}>
                <ListItemText
                  primary={text}
                  onClick={() =>
                    getCollectionNamesAndProfiles(collection.characters)
                  }
                />
              </ListItem>
            )
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.nameAndProfileContainer}>
          <div style={{ margin: '3rem' }}>
            {characters.map((c) => (
              <Name key={c.nameId} name={c.name} />
            ))}
          </div>

          <div
            style={{
              margin: '3rem',
              height: '58rem',
              width: '30rem',
              background: '#fff',
            }}
          >
            <Colection />
          </div>

          <div style={{ margin: '3rem' }}>
            {profiles.map((p) => (
              <Profile key={p.profileId} profile={p.profile} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
