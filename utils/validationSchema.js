const validationSchema = (schema) => {
    return async (req, res, next) => {
        const { value, error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json(error.message);
        } else {
            req.body = value;
            return next();
        }
    };
};

module.exports = validationSchema;