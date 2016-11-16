/**
 * Created by anderslutz on 21/10/16.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// content schema
var ContentSchema   = new Schema({
    page: String,
    content: String
});

module.exports = mongoose.model('Content', ContentSchema);
