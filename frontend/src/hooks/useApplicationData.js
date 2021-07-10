import { useEffect, useState } from'react';

const axios = require('axios').default



export function useApplicationData() {
  const [state, setState] = useState([])
  useEffect(() => {
    Promise.all([
      axios.get(`api/feedings/`)
    ]).then((all) => {
      // This provides an array of all the data in our DB
      console.log('all info', all[0].data)
      setState(all[0].data)
    })
  },[])

  function logFeeding(myFeeding) {
    console.log('in application data', myFeeding)
    return axios.post(`/api/feedings/`, { myFeeding })
  }

  return {
    state,
    logFeeding
  }

}


// Am able to get the info from the form to Applicaiton Data. 
// Next Steps: 
// 1) Set up backend API Routes, writing routes and DB queries.

// 3) Set up useEffect on load that pulls all info from the DB
// 4) Put the info on the bottom half of the screen
