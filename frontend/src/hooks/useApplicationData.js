import { useEffect, useState } from'react';

const axios = require('axios').default



export function useApplicationData() {
  const [state, setState] = useState([])
  useEffect(() => {
    Promise.all([
      axios.get(`api/feedings/`)
    ]).then((all) => {

      // This provides an array of all the data in our DB
      setState(all[0].data)
    })
  },[state])

  function logFeeding(myFeeding) {
    console.log('in application data', myFeeding)
    
    // This gets us an update from the useEffect
    state.push(myFeeding)

    // But we are still pushing the info to the DB
    return axios.post(`/api/feedings/`, { myFeeding })
  }

  return {
    state,
    logFeeding
  }

}


// Am able to get the info from the form to Applicaiton Data. 
// Next Steps: 
// 1) Allow for update/delete of the information (maybe)
// 2) Allow for a click on the columns for the data sorted by that. I think this is definitely extra though. Probably won't have time to get that done. 
