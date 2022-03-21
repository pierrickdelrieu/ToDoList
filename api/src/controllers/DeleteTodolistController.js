const { ToDoList } = require("../models")

module.exports = {
    async deleteTodo(req, res) {
        const { id_todolist } = req.body
        try {
            const todolist = ToDoList.destroy({
                where: {
                    id_todolist: id_todolist
                }
            }).then(() => {
                res.status(201).send({
                    message: "The todolist has been removed"
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