const User = require('../schemas/User');

module.exports = {
    findRegiterUser: async (email) => {
        try {
            const isUserExits = await User.findOne({ email: email });
            return isUserExits;
        } catch (error) {
            throw error;
        }
    },
    saveNewUser: async (newUserObj) => {
        try {
            const newUser = new User(newUserObj);
            return await newUser.save();
        } catch (error) {
            throw error;
        }
    }

}