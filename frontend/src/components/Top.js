import React from 'react'; 
import { Button, TextField } from '@material-ui/core'

export default function Top(props){


  return(
    <div>
      <h1>Hello</h1>
      <form noValidate autoComplete="off">
        <div>
          <TextField required label="Where were the Ducks fed?" placeholder="The Moon"/>
          <TextField required label="What time were they fed?" placeholder="Noon"/>
          <TextField required label="What type of food?" placeholder="Bread"/>
        </div>
        <div>
        <TextField required label="How many were fed?" placeholder="1"/>
        <TextField required label="How much did you feed them?" placeholder="1 piece"/>
        </div>
      </form>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}