const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const port = 5000;

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123adjr!",
  database: 'cs3320'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
golbal.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
//telling express to serve everything in the public directory so we can use it on the page
//public contains html and css folders/code
app.use(express.static('public'))
//same thing for src directory, to serve javascript
app.use(express.static('src'))

//basic response for the homepage, basic url '/'', sending the main.html file, which loads the
//CSS and JS in /public/ and /src/
// viewed at http://localhost:8080 on local machines
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// a 404 page just cause
app.use(function (req, res, next) {
  res.status(404).send("Sorry, page doesn't exist!")
})

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
