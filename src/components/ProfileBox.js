import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'

import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginBottom: 20,
    textAlign: 'center',
    cursor: 'pointer',
  },
  title: {
    fontSize: 15,
  },

  avatar: {
    backgroundColor: "#FF847C",
  },
}))

export default ({ profile, index }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        onClick={handleExpandClick}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {index + 1}
          </Avatar>
        }
        title={`${profile.substring(0, 25)}...`}
        subheader={expanded ? 'Click again to close it' : 'Click to see more'}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent onClick={handleExpandClick}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {profile}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
