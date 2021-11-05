// Coded by Christopher Barber with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
// Install modules
const express = require('express')
const app = express()
const castles = require('./data/castles')
//const api = require('./routes/api.js')

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
    res.send('<h1>404: File Not Found</h1>')
  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});