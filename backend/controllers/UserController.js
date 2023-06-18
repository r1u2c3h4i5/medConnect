const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const isUserExits = await userService.findRegisterUser(email);
            if (isUserExits && (await bcrypt.compare(password, isUserExits.password))) {
                const token = jwtTokenVerifyFunction({ id: isUserExits._id, email: isUserExits.email });
                res.status(200).json({ isUserExits, token })
            } else {
                res.send({ message: "Invalid Credentials" })
            }
        } else {
            res.send({ message: "All input is required" });
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