// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config

var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var path = require('path');

//auth
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/node_modules')); 				// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/app'));
app.use(morgan('dev')); 										// log every request to the console
app.use(cookieParser()); 										// read cookies (needed for auth))
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, '/app/views'));

//sessions
app.use(session({ 
	resave: false,
	saveUninitialized: false,
	secret: 'nicholasthomas',
	cookie : {
    	maxAge: 108000000 // see below
  	},
  	store : new MongoStore({ "mongoose_connection": mongoose.connections[0] })
})); 

app.use(flash());

// routes
require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
