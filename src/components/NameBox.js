import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
  root: {
    height: '72px',
    minWidth: '300',
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 15,
  },
})

export default ({ name }) => {

  const classes = useStyles()


  

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography
          
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
