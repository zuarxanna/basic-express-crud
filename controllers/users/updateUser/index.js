const User = require('../../../models');

module.exports = async(req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username });
    if(!user) return res.status(404).json({ message: 'User not found' });
    User.updateOne({
            username
    }, req.body)
    .then((updated) => {
        res.status(200).json({ result: updated, message: `User data has been updated`})
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}