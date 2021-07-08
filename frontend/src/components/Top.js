import React from 'react'; 
import { Button, makeStyles, TextField, Paper, ImageList } from '@material-ui/core'
import Duck from '../images/duck2.png'
import Mountain from '../images/Mountain2.jpeg'
const useStyles = makeStyles(() => ({
  root:{
    // minHeight:'60vh'
    backgroundImage:`${Mountain}`
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
        
        <img className={classes.image} src={Duck}/>
        <img className={classes.image} src={Duck}/>
        <img className={classes.image} src={Duck}/>
        
        
      </div>
    </div>
  )
}