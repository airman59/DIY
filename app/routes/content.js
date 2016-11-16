/**
 * The content-router. Still a file in the early stages of development.
 *
 * Created by anderslutz on 2016-10-26.
 */
var bodyParser = require('body-parser'); 	// get body-parser
var Content       = require('../models/content');
var config     = require('../../config');
var fs = require('fs');
var showdown = require('showdown');
var converter = new showdown.Converter();


module.exports = function(app, express) {

    var contentRouter = express.Router();

    // test route to make sure everything is working
    // accessed at GET http://localhost:8080/content
    contentRouter.get('/', function(req, res) {
        res.json({ content: 'hooray! welcome to our api!<br>A message from the server :-)' });
    });


    // on routes that end in /content/:page_type
    // ----------------------------------------------------
    contentRouter.route('/:page_type')

    // get the user with that id
        .get(function(req, res) {
            //Content.findById(req.params.user_id, function(err, content) {
            Content.findOne({ 'page': req.params.page_type }, function(err, content) {
                if (err) res.send(err);

                // Convert markdown to html.
                content.content = converter.makeHtml(content.content);

                // return that content
                res.json(content);
            });
        })


    return contentRouter;
};
