
const app = express()
const castles = require('../data/castles')


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


module.exports = api