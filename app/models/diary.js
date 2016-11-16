/**
 * Created by anderslutz on 21/10/16.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// diary schema
var DiarySchema   = new Schema({
    author: String,
    title: String,
    published: Date,
    updated: Date,
    text: String,
    img: String
});

module.exports = mongoose.model('Diary', DiarySchema);
