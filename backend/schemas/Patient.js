const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type:String, unique: true},
    password: String
})

module.exports = mongoose.model("Patient", PatientSchema);