// const { response } = require('express');
const client = require('../elephantsql');


// queries for all previous feedings
const getAllFeedings = () => {

  return client.query(`
  SELECT * FROM feedings
  `)
  .then((response) => {
    return response.rows
  })
}


// adds in a new feeding
const addFeeding = (feedingInfo) => {
  
  return client.query(`
    INSERT INTO feedings (location, time, type_of_food, number_fed, amount_fed)
    VALUES ($1, $2, $3, $4, $5);
  `, [feedingInfo.myLocation, feedingInfo.myTime, feedingInfo.myFood, feedingInfo.myNumberFed, feedingInfo.myAmountFed])
  .then((response) => {
    return response.rows[0]; 
  });
}

// Deletes a feeding
const deleteFeeding = (id) => {
  return client.query(`
    DELETE FROM feedings
    WHERE id = $1;
  `, [id])
    .then((response) => {
      return response.rows[0]
    })
}




module.exports = {
  addFeeding,
  getAllFeedings,
  deleteFeeding
}