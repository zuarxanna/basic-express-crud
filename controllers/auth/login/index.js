const bcrypt = require('bcrypt')
const User = require('../../../models/');
const generateToken = require('../../../utils/generateToken');

module.exports = async(req, res) => {
    const { username, pass } = await req.body;
    const user = await User.findOne({ username });
    if(!user) return res.status(404).json({ message: "User doesn't exist" })
    const passValidation = await bcrypt.compare(pass, user.pass);
    if(!passValidation) return res.status(401).json({ message: `Wrong password for ${username}` });
    const token = await generateToken(user);
    res.header('authorization',token);
    return res.status(200).json({ message: "succesfully logged in", data: { username, pass, token }});
}