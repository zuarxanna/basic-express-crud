const User = require('../../../models');

module.exports = async(req, res) => {
    const users = await User.find();
    try {
        res.status(200).json({ message: "success", data: users })
    } catch(err) {
        console.log(err)
    }
}