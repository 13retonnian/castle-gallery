//Coded by Christopher Barber with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
// Install modules
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});