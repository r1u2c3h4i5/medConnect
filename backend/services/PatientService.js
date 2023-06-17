var bcrypt = require('bcryptjs');
const patientDao = require('../daos/PatientDao');

module.exports = {
    findRegisterPatient: async (email) => {
        try {
            return await patientDao.findByEmail(email);
        } catch (error) {
            console.log("inside patientService -> findREgisterPatient", error);
            throw error;
        }
    },
    saveNewPatient: async (reqBody) => {
        try {
            const { firstName, lastName, email, password } = reqBody;
            var hash = bcrypt.hashSync(password, 8);
            const newPatientObj = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
            }
            return await patientDao.saveNewPatient(newPatientObj);
        } catch (error) {
            console.log('inside patientservice -> saveNewPatient', error);
            throw error;
        }
    }
}