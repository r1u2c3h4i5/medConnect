const userDao = require('../daos/UserDao');

module.exports = {
    findUserByEmail: async (email) => {
        try{
            return await userDao.findByEmail(email);
        } catch(error){
            console.log('inside userService-> findUserByEmail', error);
            throw error;
        }
    },
    saveNewUser: async (newUserObj) => {
        try{
            const userObj = {
                userId: newUserObj._id,
                firstName: newUserObj.firstName,
                lastName: newUserObj.lastName,
                email: newUserObj.email,
                password: newUserObj.password,
                role: newUserObj.role
            }
            return await userDao.saveNewUser(userObj);
        } catch(error){
            console.log('inside userService -> saveNewUser', error)
            throw error;
        }
    }
}