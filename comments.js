// Create web server
// 1. Load express
const express = require('express');
const app = express();
const port = 3000;

// 2. Load body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 3. Load express-handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// 4. Load mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yourDB', { useNewUrlParser: true });

// 5. Load models
const Comment = require('./models/comment');

// 6. Load routes
require('./routes')(app);

// 7. Listen on port 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});