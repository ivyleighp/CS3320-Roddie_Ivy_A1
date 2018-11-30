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


var baseUrl = "https://a1-ivy-roddie.herokuapp.com/"

const herokuClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

herokuClient.connect();

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

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
