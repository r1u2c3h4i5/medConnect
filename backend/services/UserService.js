const userDao = require('../daos/UserDao');
var bcrypt = require('bcryptjs');

module.exports = {
    findRegisterUser: async (email) => {
        try {
            const isUerExits = userDao.findRegiterUser(email);
            return isUerExits;
        } catch (error) {
            console.log("inside userService -> findREgisterUser", error);
            throw error;
        }
    },
    saveNewUser: async (reqBody) => {
        try {
            const { firstName, lastName, email, password } = reqBody;
            var hash = bcrypt.hashSync(password, 8);
            const newUserObj = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
            }
            const newUser = await userDao.saveNewUser(newUserObj);
            return newUser;
        } catch (error) {
            console.log('inside user service -> saveNewUser', error);
            throw error;
        }
    }
}