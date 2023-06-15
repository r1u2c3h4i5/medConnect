const Patient = require('../schemas/Patient');

module.exports = {
    findByEmail: async(email) => {
        try{
            return await Patient.findOne({email:email});
        } catch(error){
            throw error;
        }
    },
    saveNewPatient: async(newPatientObj) => {
        try{
            const newPatient = new Patient(newPatientObj);
            return await newPatient.save();
        } catch(error){
            throw error;
        }
    }
}