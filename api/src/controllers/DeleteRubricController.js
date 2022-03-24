const { Rubric, Task } = require("../models")

module.exports = {
    async deleteRubric(req, res) {
        const { id_rubric } = req.body
        try {
            const task = Task.destroy({
                where: {
                    id_rubric: id_rubric
                }
            }).then(() => {
                const rubric = Rubric.destroy({
                    where: {
                        id_rubric: id_rubric
                    }
                }).then(() => {
                    res.status(201).send({
                        message: "The rubric has been deleted !"
                    })
                })
            })
        } catch (error) {
            console.log(error)
            res.status(400).send({
                error: "An error occured during the request"
            })
        }
    }
}