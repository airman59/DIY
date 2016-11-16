/**
 * Created by anderslutz on 2016-10-28.
 */
var bodyParser = require('body-parser'); 	// get body-parser
var Diary       = require('../models/diary');
var config     = require('../../config');
var fs = require('fs');
var showdown = require('showdown');
var converter = new showdown.Converter();


module.exports = function(app, express) {

    var diaryRouter = express.Router();


    // test route to make sure everything is working
    // accessed at GET http://localhost:8080/diary
    /*diaryRouter.get('/', function(req, res) {
        res.json({ content: 'hooray! welcome to our api!<br>A message from the server :-)' });
    });*/

    // on routes that end in /all
    // ----------------------------------------------------
    diaryRouter.route('/')

    // get all the posts (accessed at GET http://localhost:8080/diary/all)
    .get(function(req, res) {

        Diary.find().sort({"published": -1}).exec(function(err, diaries) {
            if (err) res.send(err);

            // return the posts
            res.json(diaries);
        });
    });

    // on routes that end in /single/:page_id
    // ----------------------------------------------------
    diaryRouter.route('/:post_id')

    // get the user with that id
        .get(function(req, res) {
            Diary.findById(req.params.post_id, function(err, content) {
                if (err) res.send(err);

                // Convert markdown to html.
                content.text = converter.makeHtml(content.text);

                // return that content
                res.json(content);
            });
        })



    return diaryRouter;
};