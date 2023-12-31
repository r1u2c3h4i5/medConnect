const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

router.post('/patientRegister', async (req, res) => {
    try {
        const{firstName, lastName, email,password} = req.body;
        console.log(req.body, "body")
        if (firstName && lastName && email && password) {
            const isUserExits = await userService.findRegisterUser(email);
            if(isUserExits){
                res.send({ error: true, message: "User is already exists, please log in"});
            }else{
                const newPatient = await userService.saveNewPatient(req.body);
                const token = jwtTokenVerify({ id: newPatient._id, email: newPatient.email });
                newPatient.token = token;
                res.status(200).json({error: false, message: "Login Sucessfull", newPatient});        
            }
        }else {
            res.send({error: true, message: "All input is required"});
        } 
        
    } catch(error){
        console.log('inside userController -> register', error);
        throw error;
    }
})


router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!(email && password)){
            res.status(400).send("All input is required");
        }
        const isUserExits = await userService.findRegisterUser(email);
        if(isUserExits && (await bcrypt.compare(password, isUserExits.password))){
            const token = jwtTokenVerify({id: isUserExits._is, email: isUserExits.email});
            isUserExits.token = token;
            res.status(200).json(isUserExits)
        } else{
            res.status(400).send("Invalid Credentials")
        }
    } catch (error) {
        console.log('inside userController -> /login', error)
        throw error;
    }
})



function jwtTokenVerify(id, email) {
    const token = jwt.sign({ id, email }, "secret", { expiresIn: '5h' })
    return token;
}
module.exports = router;



