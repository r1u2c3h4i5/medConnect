const doctorController = require('../controllers/DoctorController');
const patientController = require('../controllers/PatientController');

module.exports = app => {
    app.use('/doctor', doctorController);
    app.use('/patient', patientController);
}