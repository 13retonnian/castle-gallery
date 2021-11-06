// Coded by Christopher Barber with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
// Install modules
const express = require('express')
const app = express()
const castles = require('./data/castles')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

//Handle Routes
const api = require('./routes/api.js')
app.use('/api', api)

// Handle 404
app.use((req, res) => {
  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {
    res.status(404)
    res.send({error: 'File Not Found 3'})
  } else {  
    // else send HTML 404
    res.status(404)
    res.sendFile(`${__dirname}/public/404.html`)
  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });