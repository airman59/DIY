/**
 * Created by anderslutz on 2016-11-03.
 */
var mongoose   = require('mongoose');
var config 	   = require('./config');
var User       = require('./app/models/user.js');
//var fs = require('fs');

// connect to the database.
mongoose.connect(config.database);



// create a new instance of the User model
var user = new User();

// set the users information (comes from request)
user.name = "name";
user.username = "username";
user.password = "password";

// save the user and check for errors
user.save(function(err) {
    if (err) {
        // duplicate entry
        if (err.code == 11000) {
            console.log("A user with that name allready exists");
        }
        else {
            console.log(err);
        }
    }
    // return a message
    console.log("User created");
    process.exit();
});
