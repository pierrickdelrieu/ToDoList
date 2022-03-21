const { User } = require("../models")

module.exports = {
    async updateUser(req, res) {
        const { email, firstname, lastname } = req.body
        try {
            let user = await User.update({
                firstname: firstname,
                lastname: lastname
            }, {
                where: {
                    email: email
                }
            })
            if (user) {
                user = await User.findOne({
                    where: {
                        email: email
                    }
                })
                userJson = user.toJSON()
                res.status(201).send({
                    user: userJson,
                    message: "Your account has been updated !"
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).send({
                message: "An error occured during the updating !"
            })
        }

    }
}