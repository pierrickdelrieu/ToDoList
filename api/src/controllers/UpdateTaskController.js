const { Task } = require("../models")

module.exports = {
    async updateTask(req, res) {

        const { id_task, name, description, date, priority, rubric } = req.body
        try {
            await Task.update({
                name: name,
                description: description,
                dateTask: date,
                priority: priority,
                id_rubric: rubric
            },
                {
                    where: {
                        id_task: id_task
                    }
                }).then(() => {
                    res.status(201).send({
                        message: "A task has been updated"
                    })
                })

        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: "An error occured during the request"
            })
        }


    }
}