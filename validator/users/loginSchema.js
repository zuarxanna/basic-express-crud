const Joi = require('joi');

const loginSchema = Joi.object({
    username: Joi.string()
        .min(5)
        .max(50)
        .required(),
    pass: Joi.string()
        .min(5)
        .max(30)
        .required()
});

module.exports = loginSchema;