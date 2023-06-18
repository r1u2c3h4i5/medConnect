const express = require('express');
const router = express.Router();
const DoctorService = require('../services/DoctorService');
const jwt = require('jsonwebtoken');
const userService = require('../services/UserService');

router.post('/doctorRegister', async(req, res) => {
    try{
        const{firstName, lastName,email,password, qualification, specialization,  contactNo } = req.body;
        if(firstName && lastName && email && password && qualification && specialization  && contactNo){
            const isDoctorExits = await DoctorService.findByEmail(email);
            if(!isDoctorExits){
                const newDoctor = await DoctorService.saveNewDoctor(req.body);
                const token = jwtTokenVerifyFunction({id: newDoctor._id, email: newDoctor.email});
                let newDoctorWithRole = newDoctor.toObject();
                newDoctorWithRole["role"] = "doctor";
                userService.saveNewUser(newDoctorWithRole);
                res.status(200).json({message: "SignUp Sucessfully",newDoctor, token });
            } else {
                res.send({ message: "Doctor is already exists please login"});
            }
        } else {
            res.send({ message: "All input is required"});
        }
    } catch(error){ 
        console.log('inside doctorController-> register'. error);
        throw error;
    }
})







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


function jwtTokenVerifyFunction(id, email){
    const token = jwt.sign({id, email}, "secret", {expiresIn: '5h'  });
    return token;
}
module.exports = router;