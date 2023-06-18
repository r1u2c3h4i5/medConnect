const mongoose = require('mongoose')


const DoctorSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    email: {type: String, unique: true},
    qualification: String,
    specialization: String,
    consultFees: Number,
    contactNo: Number
})

module.exports = mongoose.model('Doctor', DoctorSchema);