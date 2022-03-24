const { User, Have, ToDoList } = require("../models")

module.exports = {
    async createList(req, res) {
        const { name, is_favorite, id_user } = req.body

        try {
            const todolist = ToDoList.create({
                name: name,
                is_favorite: is_favorite
            }).then((todolist) => {
                /* We transfer a sequelize object into a Json object, after receiveing the object thanks to the promise,
                in order to access the data*/

                todolistJson = JSON.parse(JSON.stringify(todolist))
                const have = Have.create({
                    id_user: id_user,
                    id_todolist: todolistJson.id_todolist
                }).then((have) => {
                    res.status(201).send({
                        message: "A new task has been created !"
                    })
                })
            })
        }
        catch (error) {
            console.log("error : " + error)
            res.status(400).send({
                error: "There has been an error during the request"
            })
        }

    }
}