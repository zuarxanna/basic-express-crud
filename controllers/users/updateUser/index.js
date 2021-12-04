const User = require('../../../models');

module.exports = async(req, res) => {
    const user = await User.findOne({ username: req.params.username });
    if(!user) return res.status(404).json({ message: 'User not found' });
    const update = await User.updateOne({ username: req.params.username }, req.body)
    try {
        const updatedUser = await User.findOne({ username: req.body.username })
        res.status(200).json({ 
            result: update, 
            message: `User data has been updated`,
            updatedUser
        });
    } catch(err) {
        console.log(err);
    }
    // User.updateOne({
    //         username
    // }, req.body)
    // .then((updated) => {
    //     // const updatedUser = await User.findOne({ username: })
    //     res.status(200).json({ 
    //         result: updated, 
    //         message: `User data has been updated`,
    //     });
    // })
    // .catch((err) => {
    //     res.status(400).json(err)
    // })
}