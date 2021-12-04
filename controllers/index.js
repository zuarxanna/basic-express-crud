const { register, login } = require('./auth');
const { getUsers, updateUser, deleteUser } = require('./users');

module.exports = {
    register,
    login,
    getUsers,
    updateUser,
    deleteUser
}