import React from 'react'
import { makeStyles } from '@material-ui/core'
import Feeding from './Feeding.js'
const useStyles = makeStyles(() => ({
  root:{
    background:'linear-gradient(#6c6cff, #030369)',
    paddingTop:'1%',
    paddingBottom:'1%'
  },
  table:{
    border: '1px black solid',
    borderRadius: '10px',
    width: '90%',
    margin:'auto',
    background:'white'
  },
  header:{
    display:'flex',
    justifyContent: 'space-around'
  },
  row:{
    maxWidth:'15vw',
    minWidth:'15vw'
  }
}))


export default function Bottom(props){
  const { state } = props
  const classes = useStyles('');
  const feedingInstances = state.map((e) => {
      return (
        <Feeding
          id = {e.id}
          location = {e.location}
          amount_fed = {e.amount_fed}
          number_fed = {e.number_fed}
          type_of_food = {e.type_of_food}
          time = {e.time}       
        />
      );
    })
  

  // let pastFeedings = feedingInstances()

  return (
    <div className={classes.root}>
      <div className={classes.table}>
        <div className={classes.header}>
          <p className={classes.row}>Location</p>
          <p className={classes.row}>Time Fed</p>
          <p className={classes.row}>Type of Food</p>
          <p className={classes.row}># of Ducks Fed</p>
          <p className={classes.row}>Amount of Food / Duck</p>
        </div>
        <hr/>
        {feedingInstances}
      </div>
    </div>
  )
}