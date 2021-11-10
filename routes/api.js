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

router.get('/castles', async (req, res) => {  
  try{
    const castle = await Castle.find()  
    res.send(castle)
  } catch (error) {
    res.send({error: 'Castle Not Found'})
  }
})

router.get('/castles/:id', async (req, res) => { 
  try{
    const castle = await Castle.findOne({ id: req.params.id })
    if(!castle) {
      throw new Error()
    }
    res.send(castle)
  } catch (error) {
    res.status(404)    
    res.send({error: 'Castle Not Found'})
  } 
})

module.exports = router