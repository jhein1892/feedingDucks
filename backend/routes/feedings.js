const express = require('express');
const router = express.Router();
const {
  addFeeding
} = require('../queries/feedings-queries')
// get /feedings
router.get('/', (req, res) => {
  console.log('in get')
})




// post /feedings
router.post('/', (req, res) => {
  // console.log('req', req.body.myFeeding)
  addFeeding(req.body.myFeeding)
  .then((response) => {
    const feeding = {
      id: response.id,
      location: response.location,
      time: response.time,
      date: response.date,
      type_of_food: response.type_of_food,
      number_fed: response.number_fed,
      amount_fed: response.amount_fed,
    }
    res.send(feeding);
    console.log('feeding', feeding)
  })
  .catch(e => {
    res.send(e);
  });
});



// update /feedings





// delete /feedings

module.exports = router;