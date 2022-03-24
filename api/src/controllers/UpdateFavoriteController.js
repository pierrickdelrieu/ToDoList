const { ToDoList } = require("../models")

module.exports = {
    async updateFavorite(req, res) {
        const { id_todolist, is_favorite } = req.body
        try {
            const todolist = ToDoList.update({
                is_favorite: is_favorite
            }, {
                where: {
                    id_todolist: id_todolist
                }
            }).then(() => {
                res.status(201).send({
                    message: "The todolist has been updated"
                })
            })
        } catch (error) {
            console.log(error)
            res.status(400).send({
                error: "There has been an error during the request"
            })
        }
    }
}