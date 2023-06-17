const DoctorSchema = require('../schemas/Doctor');

module.exports = {
    saveNewDoctor: async (newDoctorObj) =>{
        const newUserUpdate = new DoctorSchema(newDoctorObj);
        return await newUserUpdate.save();
    },
    getDoctorsList: async () => {
        try{
            let query = {};
            const doctorList = await DoctorSchema.find(query);
            return doctorList;    
        } catch (error){
            throw error
        }
    },
    findByEmail: async (email) => {
        try{
            return await DoctorSchema.findOne({email: email});
        } catch(error){
            throw error;
        }
    }
}