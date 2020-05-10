import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      textAlign:'center',
      background:"#fff"
    },
    
  });

export default ()=>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
         
        </div>
    )
}