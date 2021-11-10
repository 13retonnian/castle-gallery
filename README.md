# Welcome to Castle REST API
## Instructions
- First start the server using the command 'node server.js'.
- You should see the response of 'Listening on port 3001' and 'Connected to DB'
- Then go into your browser and enter 'localhost:3001/api/castles' into your address bar and press enter. This will return a list of castles in the website database.
- You can then enter a specific castle by entering 'localhost:3001/api/castles/#' where # is a castle number between 1 and 9.
- You can also do this same thing by going to https://castle-gallery-a5.herokuapp.com/castles/#

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
- Couldn't figure out how to read DB. Solved by watching Tony Grimes' excellent classes.
- Couldn't get the res.redirect to go to the ./public/404.html. I took out the public from the URL and it worked.
- In the specific castle case I was trying to use Find on the model when I should have been getting the object of castles first. Fixed this by using 'const castles = await Castle.find()' before using find with parameters.
- Having a lot of trouble getting an error when id is out of bounds. Icah pointed out that I was using response. and res. That was it... Dumb mistake.

#### Attributions:
- Attributions to Ashlyn Knox and Tony Grimes' classes, videos and code.
- got help from Icah about out of bounds error
- (W3 Schools Find)[https://www.w3schools.com/jsref/jsref_find.asp]
- (Medium Thecodinghype)[https://medium.com/thecodinghype/https-medium-com-thecodinghype-reading-from-mongodb-database-using-express-js-and-node-js-250ef8b9282a]
- (Mongoosejs)[https://mongoosejs.com/docs/models.html]
background image: https://www.pixelstalk.net/wp-content/uploads/images1/Butron-Castle.jpg castle1: https://www.pexels.com/photo/castle-near-body-of-water-under-golden-hour-1843364/ castle2: https://www.pexels.com/photo/scenic-photo-of-castle-during-dawn-2832044/ castle3: https://www.pexels.com/photo/castle-on-hill-over-village-near-body-of-water-547494/ castle4: https://www.pexels.com/photo/green-field-and-white-and-black-concrete-structure-during-sunset-663487/ castle5: https://www.pexels.com/photo/gray-castle-under-cloudy-sky-831082/ castle6: https://www.pexels.com/photo/body-of-water-near-trees-during-daytime-161872/ castle7: https://www.pexels.com/photo/architectural-photography-of-brown-and-gray-castle-3061171/ castle8: https://www.pexels.com/photo/old-medieval-ruins-of-dunluce-castle-on-ocean-coast-in-northern-ireland-famous-place-in-uk-2350368/ castle9: https://www.pexels.com/photo/medieval-stone-castle-under-gloomy-sky-5273514/

#### License:
MIT License