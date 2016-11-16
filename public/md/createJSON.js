/**
 * Created by anderslutz on 24/10/16.
 */
fs = require('fs');
var showdown = require('showdown');

fs.readFile('home.md', 'utf8', function(err, data) {
    if(err) {
        return console.log(err);
    }
    var converter = new showdown.Converter();
    var content = converter.makeHtml(data);
    var json = {
        "header": "<h1>Me</h1>",
        "content": content
    }

    var content = JSON.stringify(json);

    fs.writeFile('../json/home.json', content, function(err){
        if(err) return console.log(err);
        console.log('File saved');
    });
});
