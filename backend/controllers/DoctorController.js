const express = require('express');
const router = express.Router();
const DoctorService = require('../services/DoctorService');

router.get('/getAllDoctor', async(req, res)=>{
    try{
        const doctorsList = await DoctorService.getDoctorsList();
        if(doctorsList){
            res.status(200).json({error:false, doctorsList})
        } else {
            res.status(500).json({error: true, message: "Something went wrong"})
        }
    } catch(error){
        console.log('inside doctorsController -> /getAllDoctors', error);
        throw error;
    }
})

module.exports = router;