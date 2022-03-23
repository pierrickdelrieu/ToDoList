const { Task } = require("../models")
module.exports = {
    async removeTask(req, res) {
        const { id_task } = req.body
        try {
            const task = await Task.destroy({
                where: {
                    id_task: id_task
                }
            }).then(() => {
                res.status(201).send({
                    message: "The task has been deleted !"
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