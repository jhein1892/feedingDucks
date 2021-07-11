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
    return axios.delete( `/api/feedings/${id}`)
  }

  return {
    state,
    logFeeding,
    deleteRow
  }

}

