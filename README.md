# Welcome to Castle REST API
## Instructions
- First start the server using the command 'node server.js'.
- You will see the responses of running on port 3001
- Then go into your browser and enter localhost:3001/api/castles into your address bar and press enter
- This will return a list of castles in the website directory
- You can then enter a specific castle by entering localhost:3001/api/castles/#  where # is a castle number between 1 and 9
- You can also do this same thing by going to https://castle-gallery-a5.herokuapp.com/castles/#
- 

## SAIT Web Development
## CPNT 262 Assignment 5 - Deployed REST API

### Author Name:
Christopher Barber

#### Github Repo:
https://github.com/13retonnian/cpnt262-a5

#### Heroku App Page:
https://castle-gallery-a5.herokuapp.com/

#### MongoDB Database
13retonnian -> sait-wbdb -> castles


#### Problems I ran into:
- Was getting 404 when trying to get specific castle. Fixed by typecasting req.params.id.
- Couldn't figure out how to read DB

#### Attributions:
- Attributions to Ashlyn Knox and Tony Grimes' classes, videos and code.
- (W3 Schools Find)[https://www.w3schools.com/jsref/jsref_find.asp]
- (Medium Thecodinghype)[https://medium.com/thecodinghype/https-medium-com-thecodinghype-reading-from-mongodb-database-using-express-js-and-node-js-250ef8b9282a]
- (Mongoosejs)[https://mongoosejs.com/docs/models.html]

#### License:
MIT License