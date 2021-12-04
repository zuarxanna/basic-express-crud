const router = require('express').Router();

const validationSchema = require('../../utils/validationSchema');

const { 
    registerSchema, 
    loginSchema 
} = require('../../validator')

const { 
    register,
    login
} = require('../../controllers');

router.post('/register', validationSchema(registerSchema), register);
router.post('/login', validationSchema(loginSchema), login);

module.exports = router;