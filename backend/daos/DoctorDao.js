const DoctorSchema = require('../schemas/Doctor');

module.exports = {
    // saveNewDoctor: async () =>{
    //     let new = new DoctorSchema();
    //     return await newUserUpdate.save();
    // }
    getDoctorsList: async () => {
        try{
            let query = {};
            const doctorList = await DoctorSchema.find(query);
            return doctorList;    
        } catch (error){
            throw error
        }
    }
}