// Coded by Christopher Barber with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
// Install modules
const express = require('express')
const app = express()
const castles = require('./data/castles')
//const api = require('./routes/api.js')

app.get('/api/castles', (req, res) => {
    // Variable is an array and not undefined
  if(castles !== 'undefined' && Array.isArray(castles)) {
    res.send(castles)
  } else {
    res.status(404)
    res.send({error: 'File Not Found 1'})    
  }
})

app.get('/api/castles/:id', (req, res) => {
  let castle
  const addressBarParams = Number(req.params.id);
  //set up find search parameters function payload  
  const specificCastle = function(castle) {
    //search parameters
    return castle.id === addressBarParams;
  }
  //if castles is undefined and an array then find it
  if (typeof castles !== 'undefined' && Array.isArray(castles)) {    
    castle = castles.find(specificCastle) 
  } else {
    castle = null;
  }  
  if (typeof castle === 'object' && castle !== null) {
    res.send(castle)
  } else {
    res.status(404)
    res.send({error: 'File Not Found 2'})
  }
})

// Handle 404
app.use((req, res) => {
  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {
    res.status(404)
    res.send({error: 'File Not Found 3'})
  } else {  
    // else send HTML 404
    res.status(404)
    res.send('<h1>404: File Not Found</h1>')
  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});