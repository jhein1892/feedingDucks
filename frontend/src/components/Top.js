import React, { useState } from 'react'; 
import { Button, makeStyles, TextField } from '@material-ui/core'
import Duck from '../images/duck2.png'

const useStyles = makeStyles(() => ({
  root:{
    // minHeight:'60vh'
    
  },
  form:{
    padding:"2%",
    minHeight:'35vh',
    
  },
  input:{
    margin:'1%',
  },
  submit:{
    marginTop:'2%'
  },
  bottomHalf:{
    background: 'linear-gradient(transparent 42%, #6c6cff 75%)'
  },
  topHalf:{
    // backgroundImage: `src(${Mountain}`
  },
  divider:{
    alignSelf:'bottom',
    width:'100%',
    margin: '0px'
  },
  image:{
    // backgroundColor:'blue',
    maxHeight: '150px',
    maxWidth: '150px',
  },
  paperContainer:{
  }
}))



export default function Top(props){
  const classes = useStyles(''); 
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [food, setFood] = useState(''); 
  const [numberFed, setNumberFed] = useState('');
  const [amountFed, setAmountFed] = useState(''); 

  function save() {

    let myFeeding = {
      myLocation: location,
      myTime: time,
      myFood: food, 
      myNumberFed: numberFed,
      myAmountFed: amountFed
    };
    
    // Sends info to DB
    props.logFeeding(myFeeding)
  }

  return(
    <div className={classes.root}>
      {/* <h1>Hello</h1> */}
      <div>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField 
              required={true}
              variant='outlined'
              className={classes.input} 
              id="location"
              label="Location" 
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <TextField 
              required={true}
              variant='outlined' 
              className={classes.input} 
              id='time'
              label="Time" 
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            <TextField 
              required={true}
              variant='outlined' 
              className={classes.input} 
              id='food'
              label="Type of Food" 
              value={food}
              onChange={(event) => setFood(event.target.value)}
            />
          </div>
          <div>
            <TextField 
                required={true}
                variant='outlined' 
                className={classes.input} 
                id='number'
                label="Number Fed" 
                value={numberFed}
                onChange={(event) => setNumberFed(event.target.value)}
              />
            <TextField 
                required={true}
                variant='outlined' 
                className={classes.input} 
                id='amount'
                label='Amount of Food' 
                value={amountFed}
                onChange={(event) => setAmountFed(event.target.value)}
              />
          </div>
        <Button 
          className={classes.submit} 
          variant="contained" 
          color="primary"
          onClick={() => save()}
        >
          Submit
        </Button>
        </form>
      </div>
      <div className={classes.bottomHalf}>
        
        <img className={classes.image} src={Duck}/>
        <img className={classes.image} src={Duck}/>
        <img className={classes.image} src={Duck}/>
        
        
      </div>
    </div>
  )
}