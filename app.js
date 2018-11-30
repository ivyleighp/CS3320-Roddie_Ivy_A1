const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {getQuoteHomePage} = require('./routes/indexQ');
const {addClientPage, addClient, deleteClient, editClient, editClientPage} = require('./routes/client');
const {addQuotePage, addQuote, deleteQuote, editQuote, editQuotePage} = require('./routes/quote');

//const port = 8080


// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
/*
const db = mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "123adjr!",
  database: 'cs3320'
});
*/
// connect to database
/* db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db; */





var path = require('path');

// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// // this is necessary because at deploy time, Heroku decides what port the application runs on.
var port = process.env.PORT || 8080;

//telling express to serve everything in the public directory so we can use it on the page
//public contains html and css folders/code
app.use(express.static('public'))
//same thing for src directory, to serve javascript
app.use(express.static('src'))

//basic response for the homepage, basic url '/'', sending the main.html file, which loads the
//CSS and JS in /public/ and /src/
// viewed at http://localhost:8080 on local machines
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/indexClient.ejs'));
});


//telling the server to listen on the assigned port
app.listen(port, () => console.log(`App listening on port ${port}!`))


// a 404 page just cause
app.use(function (req, res, next) {
  res.status(404).send("Sorry, page doesn't exist!")
})
/*
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/

/*
// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

app.get('/', getHomePage);
app.get('/add', addClientPage);
app.get('/edit/:clientId', editClientPage);
app.get('/delete/:clientId', deleteClient);
app.post('/add', addClient);
app.post('/edit/:clientId', editClient);
app.get('/QuoteHistory', getQuoteHomePage);
app.get('/addQ', addQuotePage);
app.get('/editQ/:quoteId', editQuotePage);
app.get('/deleteQ/:quoteId', deleteQuote);
app.post('/addQ', addQuote);
app.post('/editQ/:quoteId', editQuote);



// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

*/
