const { send } = require("express/lib/response");
const Joi = require("joi");

module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            firstname: Joi.string(),
            lastname: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string()
        })
        const { error } = schema.validate(req.body)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email adress'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'The password provided failed to match the rules'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        }
        else {
            next()
        }
    }
}