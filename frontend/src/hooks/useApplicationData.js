import { useEffect, useState } from'react';

const axios = require('axios').default



export function useApplicationData() {
  const [state, setState] = useState([])
  useEffect(() => {
    Promise.all([
      axios.get(`api/feedings/`)
    ]).then((all) => {
      setState(all[0].data)
    })
  },[state])


  // Adding New feedings to DB
  function logFeeding(myFeeding) {
    // This gets us an update from the useEffect
    state.push(myFeeding)
    return axios.post(`/api/feedings/`, { myFeeding })
  }

  function deleteRow(id) {
    console.log('in uad', id)
    return axios.delete( `/api/feedings/${id}`)
  }

  return {
    state,
    logFeeding,
    deleteRow
  }

}


// Am able to get the info from the form to Applicaiton Data. 
// Next Steps: 
// 1) Allow for update/delete of the information (maybe)
// 2) Allow for a click on the columns for the data sorted by that. I think this is definitely extra though. Probably won't have time to get that done. 
