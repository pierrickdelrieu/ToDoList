const { User, Have, ToDoList, Task, Rubric } = require("../models")

module.exports = {
    async createNewTask(req, res) {
        const { id_rubric, rubric_name, task_name, task_description, task_priority, id_user, task_date } = req.body
        const task = Task.create({
            id_rubric: id_rubric,
            name: task_name,
            description: task_description,
            dateTask: task_date,
            priority: task_priority
        }).then(() => {
            res.status(201).send({
                message: "The task has been created !"
            })
        })


    }
}