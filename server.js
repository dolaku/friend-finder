const express = require('express');
const path = require('path');

// From the express Constructor above
// New Express() is being called behind the scenes
const app = express();

// Either use Heroku deployment OR localhost
const PORT = process.env.PORT || 8080;

// Express gives the browser access to anything in the public directory
app.use(express.static(path.join(__dirname, 'public')));
// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES ============
require('./app/routing/htmlRoutes.js')(app);
// require('./app/routing/apiRoutes.js')(app);


// LISTENER ==========
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));