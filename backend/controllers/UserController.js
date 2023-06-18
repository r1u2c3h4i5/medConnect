const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userService = require('../services/UserService');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const isUserExits = await userService.findUserByEmail(email);
            if (isUserExits && (await bcrypt.compare(password, isUserExits.password))) {
                const token = jwtTokenVerifyFunction({ id: isUserExits._id, email: isUserExits.email });
                res.status(200).json({ message: "Login Sucessfull", isUserExits, token })
            } else {
                res.send({error:true, message: "Invalid Credentials" })
            }
        } else {
            res.send({error:true, message: "All input is required" });
        }
    } catch (error) {
        console.log('inside userController -> /login', error)
        throw error;
    }
})

function jwtTokenVerifyFunction(id, email) {
    const token = jwt.sign({ id, email }, "secret", { expiresIn: '5h' })
    return token;
}
module.exports = router;