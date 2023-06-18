const doctorController = require('../controllers/DoctorController');
const patientController = require('../controllers/PatientController');
const userController = require('../controllers/UserController');

module.exports = app => {
    app.use('/doctor', doctorController);
    app.use('/patient', patientController);
    app.use('/user', userController)
}