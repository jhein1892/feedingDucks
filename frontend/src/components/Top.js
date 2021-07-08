import React from 'react'; 
import { Button, makeStyles, TextField } from '@material-ui/core'


const useStyles = makeStyles(() => ({
  root:{
    // minHeight:'60vh'
  },
  form:{
    padding:"2%",
    minHeight:'35vh'
  },
  input:{
    margin:'1%',
  },
  submit:{
    marginTop:'2%'
  },
  bottomHalf:{
    minHeight:'20vh',
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-end'
  },
  divider:{
    alignSelf:'bottom',
    width:'100%',
  }
}))



export default function Top(props){
  const classes = useStyles(); 


  return(
    <div className={classes.root}>
      <h1>Hello</h1>
      <div>
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
        <Button className={classes.submit} variant="contained" color="primary">
          Submit
        </Button>
        </form>
      </div>
      <div className={classes.bottomHalf}>
        <hr className={classes.divider}></hr>
      </div>
    </div>
  )
}