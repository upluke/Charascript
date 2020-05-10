import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import initialData from '../database/allData'
import NameContainer from './NameContainer'
import ProfileContainer from './ProfileContainer'
import CollectionContainer from './CollectionContainer'
import TopNav from './TopNav'
import LeftNav from './LeftNav'
const drawerWidth = 270
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#2A363B',
    color: '#fff',
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
      <TopNav open={open} handleDrawerOpen={handleDrawerOpen} />
      {/* drawer component */}
      <LeftNav
        open={open}
        handleDrawerClose={handleDrawerClose}
        getCollectionNamesAndProfiles={getCollectionNamesAndProfiles}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.nameAndProfileContainer}>
          <div style={{ margin: '3rem' }}>
            <NameContainer characters={characters} />
          </div>

          <div
            style={{
              margin: '3rem',
              height: '58rem',
              width: '30rem',
              background: '#fff',
            }}
          >
            <CollectionContainer />
          </div>

          <div style={{ margin: '3rem' }}>
            <ProfileContainer profiles={profiles} />
          </div>
        </div>
      </main>
    </div>
  )
}
