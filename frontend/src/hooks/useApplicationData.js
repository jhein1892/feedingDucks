import { useEffect } from'react';

const axios = require('axios').default



export function useApplicationData() {


  function logFeeding(myFeeding) {
    console.log('in application data', myFeeding)
    return axios.post(`/api/log`, { myFeeding })
  }

  return {
    logFeeding
  }

}


// Am able to get the info from the form to Applicaiton Data. 
// Next Steps: 
// 1) Set up backend API Routes, writing routes and DB queries.
// 2) Create DB Table
// 3) Set up useEffect on load that pulls all info from the DB
// 4) Put the info on the bottom half of the screen
