const mongoose = require('mongoose')
const userSchema = require('../schemas')

// Schema
const User = mongoose.model('User', userSchema);

module.exports = User;