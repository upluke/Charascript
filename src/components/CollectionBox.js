import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 300,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'grey',
    border: '3px dashed white',
  },
  title: {
    fontSize: 15,
  },
})

export default () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Please drag your answer to here
        </Typography>
      </CardContent>
    </Card>
  )
}