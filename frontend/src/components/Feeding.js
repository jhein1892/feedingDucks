import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles (() => ({
  root:{
    display:'flex'
  }
}))

export default function Feeding(props){
  const classes = useStyles('');
  console.log('props', props)
  const { location, amount_fed, number_fed, type_of_food, time } = props

  return (
    <div className={classes.root}>
      <p>{location}</p>
      <p>{amount_fed}</p>
      <p>{number_fed}</p>
      <p>{type_of_food}</p>
      <p>{time}</p>
    </div>
  )
}