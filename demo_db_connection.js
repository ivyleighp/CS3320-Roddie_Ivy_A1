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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});