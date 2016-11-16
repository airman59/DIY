/**
 * Created by anderslutz on 2016-10-28.
 */
var mongoose   = require('mongoose');
var config 	   = require('./config');
var Content       = require('./app/models/diary.js');
var fs = require('fs');

// connect to the database.
mongoose.connect(config.database);

//var title = process.argv[2] || 'post-01';
var title = "My environment";
var file = "newpost";

// look for the post
Content.findOne({ 'title': title }, function(err, content) {

    // if there is no post fetch the new text from the markdown-file and save it in the DB.
    if (!content) {
        var post = new Content();

        // Fetch the markdown-file and save it in the DB.
        fs.readFile('./public/mdposts/' + file + '.md', 'utf8', function(err, data) {
            if(err) {
                return console.log(err);
            }

            post.text = data;
            post.title = title;
            post.author = "Luz";
            //post.published = Date();
            post.published = new Date();
            post.updated = new Date();
            post.img = "img/diary/environment.jpg";
            post.save(function(err) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000)
                        return res.json({ success: false, message: 'A post with that name already exists. '});
                    else
                        return res.send(err);
                }
                console.log(post + ' saved in DB');
                console.log("Script finished");
                process.exit();
            });

        });

    } else {


        // Fetch the edited markdown-file and save it in the DB.
        fs.readFile('./public/mdposts/' + file + '.md', 'utf8', function(err, data) {
            if(err) {
                return console.log(err);
            }
            content.text = data;
            content.save(function(err) {
                if(err) {
                    console.log(err);
                }
                console.log("Script finished");
                process.exit();
            });


        });
    }

});