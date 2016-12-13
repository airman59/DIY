/**
 * A simple script to create or update a page after uploading of the new/edited
 * markdown-file... it takes one argument which is the page to create/update.
 *
 * Created by anderslutz on 2016-10-27.
 */
var mongoose   = require('mongoose');
var config 	   = require('./config');
var Content       = require('./app/models/content.js');
var fs = require('fs');

// connect to the database.
mongoose.connect(config.database);

var page = process.argv[2] || 'home';

// look for the page-content
Content.findOne({ 'page': page }, function(err, content) {

    // if there is no page-content fetch the new page from the markdown-file and save it in the DB.
    if (!content) {
        var homeContent = new Content();

        // Fetch the markdown-file and save it in the DB.
        fs.readFile('./public/md/' + page + '.md', 'utf8', function(err, data) {
            if(err) {
                return console.log(err);
            }

            homeContent.content = data;
            homeContent.page = page;
            homeContent.save(function(err) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000)
                        return res.json({ success: false, message: 'A content with that page-name already exists. '});
                    else
                        return res.send(err);
                }
                console.log(page + ' content saved in DB');
                console.log("Script finished");
                process.exit();
            });

        });

    } else {


        // Fetch the edited markdown-file and save it in the DB.
        fs.readFile('./public/md/' + page + '.md', 'utf8', function(err, data) {
            if(err) {
                return console.log(err);
            }
            content.content = data;
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
