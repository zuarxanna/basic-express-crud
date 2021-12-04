const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    pass: {
        type: String,
        require: true,  
    }
})

module.exports = User;