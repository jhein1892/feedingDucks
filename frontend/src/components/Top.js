import React from 'react'; 
import { Button, makeStyles, TextField } from '@material-ui/core'


const useStyles = makeStyles(() => ({
  form:{
    padding:"2%"
  },
  input:{
    margin:'1%',
  }
}))



export default function Top(props){
  const classes = useStyles(); 


  return(
    <div>
      <h1>Hello</h1>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField className={classes.input} required label="Location" placeholder="The Moon"/>
          <TextField className={classes.input} required label="Time" placeholder="Noon"/>
          <TextField className={classes.input} required label="Type of Food" placeholder="Bread"/>
        </div>
        <div>
        <TextField className={classes.input} required label="Number Fed" placeholder="1"/>
        <TextField className={classes.input} required label="Amount of Food" placeholder="1 piece"/>
        </div>
      </form>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}