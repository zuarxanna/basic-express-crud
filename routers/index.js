const router = require('express').Router();
const authToken = require('../middleware/auth');

const authRouter = require('./auth');
const usersRouter = require('./users');

router.use('/', authRouter);
router.use('/users', authToken, usersRouter);

module.exports = router;


