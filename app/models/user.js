/**
 * Created by anderslutz on 14/09/16.
 */

// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// user schema
var UserSchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }
});

UserSchema.pre('save', function(next) {
    var user = this;

    // hash the password only if the password has been changed or the user is new
    bcrypt.hash(user.password, null, null, function(err, hash) {
        if (err) {
            return next(err);
        }

        // change the password to the hashed version
        user.password = hash;
        next();
    })
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
    var user = this;
    return bcrypt.compareSync(password, user.password);
};

// return the model
module.exports = mongoose.model('User', UserSchema);
