/**
 * My server which is built from the result of the Book https://leanpub.com/mean-machine,
 * which I recommend even though I have decided not to use Angular.
 *
 * Created by anderslutz on 10/10/16.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var favicon = require('serve-favicon');
var path = __dirname + '/public/views/';
var config 	   = require('./config');


app.use(favicon(__dirname + '/public/crown.ico'));

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// log all requests to the console
app.use(morgan('dev'));

// connect to the database.
mongoose.connect(config.database);

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

/*********************************************************************************
 * API-routes
 *********************************************************************************/
// Public routes to view the pages
//var contentRoutes = require('./app/routes/content')(app, express);
//app.use('/content', contentRoutes);
//var diaryRoutes = require('./app/routes/diary')(app, express);
//app.use('/diary', diaryRoutes);

// Protected routes to administrate the site
//I have to implement authentication before I can show these
//var adminRoutes = require('./app/routes/admin')(app, express);
//app.use('/admin', adminRoutes);

// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

