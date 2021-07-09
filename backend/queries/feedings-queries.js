const { response } = require('express');
const client = require('../elephantsql');


// queries for all previous feedings



// adds in a new feeding
const addFeeding = (feedingInfo) => {
  // console.log('feedingInfo', feedingInfo)
  return client.query(`
    INSERT INTO feedings (location, time, type_of_food, number_fed, amount_fed)
    VALUES ($1, $2, $3, $4, $5);
  `, [feedingInfo.myLocation, feedingInfo.myTime, feedingInfo.myFood, feedingInfo.myNumberFed, feedingInfo.myAmountFed])
  .then((response) => {
    console.log('response', response)
    return response.rows[0]; 
  });
}

// Updates an existing feeding


// Deletes a feeding

module.exports = {
  addFeeding
}