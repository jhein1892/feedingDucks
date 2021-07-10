import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles (() => ({
  root:{
    display:'flex',
    justifyContent: 'space-around',
    '&:hover':{
      background:'#0080004d'
    }
  },
  row:{
    maxWidth:'15vw',
    minWidth:'15vw' 
  }
}))

export default function Feeding(props){
  const classes = useStyles('');
  const { location, amount_fed, number_fed, type_of_food, time } = props

  return (
    <div className={classes.root}>
      <p className={classes.row}>{location}</p>
      <p className={classes.row}>{time}</p>
      <p className={classes.row}>{type_of_food}</p>
      <p className={classes.row}>{amount_fed}</p>
      <p className={classes.row}>{number_fed}</p>
    </div>
  )
}