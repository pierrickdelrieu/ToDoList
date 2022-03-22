const { ToDoList, Rubric } = require("../models")

module.exports = {
    async createRubric(req, res) {
        const { id_todolist, rubric_name } = req.body
        try {
            const rubric = Rubric.create({
                name: rubric_name,
                id_todolist: id_todolist
            }).then(() => {
                res.status(201).send({
                    message: "The rubric has been created !"
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