const User = require('../../../models');
const bcrypt = require('bcrypt');


module.exports = async (req, res) => {
    const usernameUsed = await User.findOne({ username: req.body.username });
    if(usernameUsed) return res.status(409).json("Username already in use");
    const encryptedPass = await bcrypt.hash(req.body.pass, 10);
    const newUser = {
        username: req.body.username,
        pass: encryptedPass
    }
    User.insertMany(newUser, (err, data) => {
        err ? 
        res.status(409).json(err.writeErrors) :
        res.status(200).json({ message: "User Succesfully Created", data });
    })
}