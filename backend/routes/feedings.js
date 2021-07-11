const express = require('express');
const router = express.Router();
const {
  addFeeding,
  getAllFeedings,
  deleteFeeding
} = require('../queries/feedings-queries')

// get /feedings
router.get('/', (req, res) => {
  getAllFeedings()
    .then((response) => {
      res.json(response)
    });
});

// post /feedings
router.post('/', (req, res) => {
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
  })
  .catch(e => {
    res.send(e);
  });
});


// delete /feedings
router.delete(`/:id`, (req, res) => {
  deleteFeeding(req.params.id)
  .then((data) => {
    res.send(data)
  })
  .catch(e => {
    res.send(e)
  })

})


module.exports = router;