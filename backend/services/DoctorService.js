const DoctorDao = require('../daos/DoctorDao');

module.exports = {
    getDoctorsList: async () => {
        try{
            const doctorList = await DoctorDao.getDoctorsList();
            return doctorList;    
        } catch(error){
            console.log('inside doctorsService-> getDoctorsList', error)
            throw error;
        }
    },
    findByEmail: async (email) => {
        try{
            return await DoctorDao.findByEmail(email);
        } catch(error){
            console.log("inside doctorService -> findByEmail", error);
            throw error;
        }
    },
    saveNewDoctor: async (newDoctorObj) => {
        try{
            return await DoctorDao.saveNewDoctor(newDoctorObj);
        } catch(error){
            console.log('inside DoctorService -> saveNewDoctor', error);
            throw error;
        }
    }
}