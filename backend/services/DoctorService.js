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
    }
}