const express = require('express');
const router = express.Router();
const patientService = require('../services/PatientService');
const jwt = require('jsonwebtoken');
const userService = require('../services/UserService');

router.post('/patientRegister', async (req, res) => {
    try {
        const{firstName, lastName, email,password} = req.body;
        if (firstName && lastName && email && password) {
            const isUserExits = await patientService.findRegisterPatient(email);
            if(isUserExits){
                res.send({  message: "User is already exists, please login"});
            }else{
                let newPatient = await patientService.saveNewPatient(req.body);
                const token = jwtTokenVerifyFunction({ id: newPatient._id, email: newPatient.email });
                let newPatientWithRole = newPatient.toObject(); 
                newPatientWithRole["role"] = "patient";
                userService.saveNewUser(newPatientWithRole);
                res.status(200).json({ message: "SignUp Sucessfully", newPatient, token});        
            }
        }else {
            res.send({ message: "All input is required"});
        } 
        
    } catch(error){
        console.log('inside patientController -> register', error);
        throw error;
    }
})






function jwtTokenVerifyFunction(id, email) {
    const token = jwt.sign({ id, email }, "secret", { expiresIn: '5h' })
    return token;
}
module.exports = router;



