const { User } = require("../models")
const jwt = require("jsonwebtoken")
const config = require("../config/config")

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.status(201).send({
                user: userJson,
                token: jwtSignUser(userJson),
                message: "Your account has been created !"
            })
        } catch (err) {
            res.status(400).send({
                error: "This email account is already in use."
            })
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            /* If there is no user associated with this email*/
            if (!user) {
                return res.status(400).send({

                    error: 'The login informations were incorrect'
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            /* If the password is not the same as the one which is stored in the database*/
            if (!isPasswordValid) {
                return res.status(400).send({
                    error: 'The login informations were incorrect'
                })
            }
            /* If the user has been found and the password is correct*/
            const userJson = user.toJSON()
            return res.status(200).send({
                user: userJson,
                token: jwtSignUser(userJson),
                message: "You has been logged !"
            })
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: "The login informations were incorrect"
            })
        }
    }

}