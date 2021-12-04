const User = require('../../../models');

module.exports = async (req, res) => {
    const usernameUsed = await User.findOne({ username: req.body.username});
    if(usernameUsed) return res.status(409).json("Username already in use");
    User.insertMany(req.body, (err, user) => {
        err ? 
        res.status(409).json(err.writeErrors) :
        res.status(200).json({ message: "User Succesfully Created", data: user});
    })
}