import React, { useState } from 'react'
import { makeStyles, Button } from '@material-ui/core'
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
    minWidth:'15vw',
    fontWeight:'bolder'
  },
  locked:{
    minHeight:'30vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  },
  lockButton:{
    maxWidth:'30vw',
    alignSelf:'center',
    marginTop:'-10%',
    background:'white',
    boxShadow:'0px 0px 19px 5px #1724b3',
    '&:hover':{
    background:'#335cd4e8',
    color:'white',
    boxShadow:'0px 0px 19px 5px #1724b3'
    }
  }
}))


export default function Bottom(props){
  const { state, deleteRow } = props
  const classes = useStyles('');
  const [locked, setLocked] = useState(true)
  const feedingInstances = state.map((e) => {
      let deleteFeeding = function(id) {
        deleteRow(id)
      }

      return (
        <Feeding
          key = {e.id}
          location = {e.location}
          amount_fed = {e.amount_fed}
          number_fed = {e.number_fed}
          type_of_food = {e.type_of_food}
          time = {e.time}
          deleteRow = {() => deleteFeeding(e.id)}       
        />
      );
    })
  

  // let pastFeedings = feedingInstances()

  return (
    <div className={classes.root}>
      {!locked && 
      <div className={classes.table}>
        <div className={classes.header}>
          <p className={classes.row}>Location</p>
          <p className={classes.row}>Time Fed</p>
          <p className={classes.row}>Type of Food</p>
          <p className={classes.row}># of Ducks Fed</p>
          <p className={classes.row}>Amount of Food / Duck</p>
          <p className={classes.row}></p>
        </div>
        <hr/>
        {feedingInstances}
        <Button
          variant='contained'
          color='secondary'
          style={{marginBottom: '1%', marginTop: '1%'}}
          onClick={() => setLocked(true)}
        >
          Close Table
        </Button>
      </div>
      }{locked &&
        <div className={classes.locked}>
          <Button
            className={classes.lockButton}
            variant='outlined'
            onClick={() => setLocked(false)}>
            Check out the Data
          </Button>
        </div>
      }
    </div>
  )
}