var bcrypt = require('bcryptjs');
const patientDao = require('../daos/PatientDao');

module.exports = {
    findRegisterUser: async (email) => {
        try {
            return await patientDao.findByEmail(email);
        } catch (error) {
            console.log("inside userService -> findREgisterUser", error);
            throw error;
        }
    },
    saveNewPatient: async (reqBody) => {
        try {
            const { firstName, lastName, email, password } = reqBody;
            var hash = bcrypt.hashSync(password, 8);
            const newUserObj = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
            }
            return await patientDao.saveNewPatient(newUserObj);
        } catch (error) {
            console.log('inside user service -> saveNewUser', error);
            throw error;
        }
    }
}