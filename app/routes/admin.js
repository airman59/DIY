/**
 * Created by anderslutz on 16/09/16.
 */

var User    = require('../models/user');
var jwt     = require('jsonwebtoken');
var config  = require('../../config');

var superSecret = config.secret;

module.exports = function(app, express) {

// Start CUT --------------------------------------------------
    var adminRouter = express.Router();


// route to authenticate a user (POST http://localhost:8080/admin/authenticate)
    adminRouter.post('/authenticate', function(req, res) {

        // find the user
        // select the name, username and password explicitly
        User.findOne({
            username: req.body.username
        }).select('name username password').exec(function(err, user) {

            if (err) throw err;

            // no user with that username was found
            if (!user) {
                res.json({
                    success: false,
                    message: 'Authentication failed. User not found'
                });
            }
            else if (user) {

                // check if password matches
                var validPassword = user.comparePassword(req.body.password);
                if (!validPassword) {
                    res.json({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });
                }
                else {
                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign({
                        name: user.name,
                        username: user.username
                    }, superSecret, {
                        expiresIn: '24h'
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token',
                        token: token
                    });
                }
            }
        });
    });





// middleware to verify a token
    adminRouter.use(function(req, res, next) {
        // do logging
        console.log('Somebody just came to our api!');

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, superSecret, function(err, decoded) {
                if (err) {
                    return res.status(403).send({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;

                    next();
                }
            });

        } else {
            // if there is no token
            // return a HTTP response of 403 (access forbidden) and an error message
            return res.status(403).send({
                success: false,
                message: 'No token provided'
            });
        }
    });


// test route to make sure everything is working
// accessed at GET http://localhost:3000/admin
    adminRouter.get('/', function(req, res) {
        res.json({ message: 'Hooray! Wellcome to MeanMachine api! - The token works :-)'});
    });

// more routes for our Admin-API will happen here

// on routes that end in /users
// -------------------------------------------------------------------
    adminRouter.route('/users')

    // create a user (accessed at POST http://localhost:3000/admin/users
        .post(function(req, res) {

            // create a new instance of the User model
            var user = new User();

            // set the users information (comes from request)
            user.name = req.body.name;
            user.username = req.body.username;
            user.password = req.body.password;

            // save the user and check for errors
            user.save(function(err) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000) {
                        return res.json({ success: false, message: 'A user with that username already exists. ' });
                    }
                    else {
                        return res.send(err);
                    }
                }
                // return a message
                res.json({ message: 'User created!' });
            });
        })

        // get all the users (accessed at GET http://localhost:3000/admin/users
        .get(function(req, res) {
            User.find(function(err, users) {
                if (err) {
                    res.send(err);
                }
                // return the users
                res.json(users);
            });
        });

// on routes that end in /users/:user_id
// ----------------------------------------------------
    adminRouter.route('/users/:user_id')

    // get the user with that id
    // (accessed at GET http://localhost:3000/admin/users/:user_id)
        .get(function(req, res) {
            User.findById(req.params.user_id, function(err, user) {
                if (err) {
                    res.send(err);
                }
                // return that user
                res.json(user);
            });
        })

        // update the user with this id
        // (accessed at PUT http://localhost:3000/admin/users/:user_id
        .put(function(req, res) {

            // use our user model to find the user we want
            User.findById(req.params.user_id, function(err, user) {
                if(err) {
                    res.send(err);
                }

                // set the new user information if it exists in the request
                if (req.body.name) user.name = req.body.name;
                if (req.body.username) user.username = req.body.username;
                if (req.body.password) user.password = req.body.password;

                // save the user
                user.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    // return a message
                    res.json({ message: 'User updated' });
                });
            });
        })

        // delete the user with this id
        // (accessed at DELETE http://localhost:3000/admin/users/:user_id
        .delete(function(req, res) {
            User.remove({
                _id: req.params.user_id
            }, function(err, user) {
                if (err) return res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

// End CUT -----------------------------------------------------
    return adminRouter;
};
