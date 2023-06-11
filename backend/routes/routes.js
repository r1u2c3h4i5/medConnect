const doctorController = require('../controllers/DoctorController');
const userController = require('../controllers/UserController');

module.exports = app => {
    app.use('/doctor', doctorController);
    app.use('/user', userController);
}