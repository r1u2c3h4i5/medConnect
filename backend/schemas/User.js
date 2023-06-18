const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    password: String,
    role: String,
    userId: String,

});

module.exports = mongoose.model("User", UserSchema);