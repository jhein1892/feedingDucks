import React from 'react'
import { makeStyles } from '@material-ui/core'
import Feeding from './Feeding.js'
const useStyles = makeStyles(() => ({

}))


export default function Bottom(props){
  const { state } = props

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
    <div>
      <h1>Bottom Half</h1>
      {feedingInstances}
    </div>
  )
}