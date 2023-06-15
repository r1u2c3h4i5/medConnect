const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports = mongoose.model("Patient", PatientSchema);