const router = require('express').Router();
const authToken = require('../middleware/auth');

const authRouter = require('./auth');
const usersRouter = require('./users');

router.use('/auth', authRouter);
router.use('/users', authToken, usersRouter);
router.get('/', (req, res) => {
    res.status(200).send('API is working!')
})

module.exports = router;


