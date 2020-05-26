import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {useDrop} from 'react-dnd'
import {ItemTypes} from '../database/types'

const useStyles = makeStyles({
  root: {
    width: 300,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'grey',
    border: '3px dashed white', 
  },
  title: {
    color:'#fff',
    fontSize: 15,
  },
})

export default () => {
  const classes = useStyles()

  const[{isOver}, drop]=useDrop({
    accept:ItemTypes.CARD,
    drop:(item, monitor)=>console.log("item info: ", item),
    collect:monitor=>({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <Card className={classes.root} ref={drop} style={{background:isOver?'#FF847C':'grey'}}>
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
