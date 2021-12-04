const User = require('../../../models')

module.exports = async(req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username });
    if(!user) return res.status(404).json({ message: 'User not found' });
    User.deleteOne({
        username
    }).then((deleted) => { 
        res.status(200).json({ 
            result: deleted, 
            message: 'User has been deleted'})
    }).catch((err) => {
        console.log(err);
    });     
};