const express = require('express')
const app = express()
//const castles = require('../data/castles')
const router = express.Router();
//connect to database
const db = require('../model/db')
const mongoose = require('mongoose');
const { response } = require('express');
const dotenv = require('dotenv').config()

const castleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: 	Number, 
  height: Number,
  pathURL: String,
  linkURL: String,
  credit: String,
  creditURL: String
});
const Castle = mongoose.model('Castle', castleSchema)

router.get('/castles', async (request, response) => {  
  try{
    const castle = await Castle.find()  
    response.send(castle)
  } catch (error) {
    response.send({error: 'Castle Not Found'})
  }
})

router.get('/castles/:id', async (req, res) => {
  try{
  //get full castle list
    const castles = await Castle.find()
    // typecast the address bar parameter to number
    const addressBarParams = Number(req.params.id);
    //set up find search parameters function payload  
    const specificCastleParameter = function(castle) {
      //search parameters
      return castle.id === addressBarParams;
    }
    //find the castle  
    castle = castles.find(specificCastleParameter)
    if(!castle) {
      throw new Error()
    }
    //send the castle
    res.send(castle)
  } catch (error) {
    response.status(404)
    response.send({error: 'Castle Not Found'})
  }
})

module.exports = router