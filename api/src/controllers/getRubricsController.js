const { User, Have, ToDoList, Rubric, Task } = require("../models")

module.exports = {
    async getRubrics(req, res) {
        const { id_user, id_todolist } = req.body
        rubricsArray = []
        let objectRubric = {
            id: null,
            name: "",
            tasks: []
        }

        let todolist, rubrics;
        try {
            const having = await Have.findOne({
                where: {
                    id_user: id_user,
                    id_todolist: id_todolist
                }
            })
            if (having) {
                havingJson = having.toJSON()
                todolist = await ToDoList.findOne({
                    where: {
                        id_todolist: havingJson.id_todolist
                    }
                })
                todolistJson = todolist.toJSON()
            }
            if (todolist) {
                rubrics = await Rubric.findAll({
                    raw: true,
                    where: {
                        id_todolist: todolistJson.id_todolist
                    }
                })
            }
            if (rubrics) {
                /* objectRubric will contain 3 objects as rubrics, because we have 3 rubrics : ToDo doing and done*/
                objectRubric = []
                for (let index = 0; index < rubrics.length; index += 1) {
                    /* We research in objectRubric if the focused rubric is allready in it. If not, we add
                    it in objectRubric*/
                    let indexObject = 0
                    let verifyName = false
                    while (indexObject < objectRubric.length) {
                        if (objectRubric[indexObject].name === rubrics[index].name) {
                            verifyName = true
                            objectRubric[indexObject].id = rubrics[index].id_rubric
                            objectRubric[indexObject].name = rubrics[index].name
                            taskInstances = await Task.findAll({
                                raw: true,
                                where: {
                                    id_rubric: rubrics[index].id_rubric
                                }
                            })
                            if (taskInstances) {
                                for (let indexTask = 0; indexTask < taskInstances.length; indexTask += 1) {
                                    let tasks = {
                                        id: null,
                                        name: "",
                                        description: "",
                                        date: null,
                                        priority: null,
                                        members: null
                                    }
                                    tasks.id = taskInstances[indexTask].id_task
                                    tasks.name = taskInstances[indexTask].name
                                    tasks.description = taskInstances[indexTask].description
                                    tasks.date = taskInstances[indexTask].dateTask
                                    tasks.priority = 2
                                    objectRubric[indexObject].tasks.push(tasks)
                                }
                            }
                            indexObject = objectRubric.length
                        }
                        indexObject += 1
                    }
                    if (!verifyName) {
                        let newObject = {
                            id: rubrics[index].id_rubric,
                            name: rubrics[index].name,
                            tasks: []
                        }
                        taskInstances = await Task.findAll({
                            raw: true,
                            where: {
                                id_rubric: rubrics[index].id_rubric
                            }
                        })
                        if (taskInstances.length > 0) {
                            for (let indexTask = 0; indexTask < taskInstances.length; indexTask += 1) {
                                tasks = {
                                    id: null,
                                    name: "",
                                    description: "",
                                    date: null,
                                    priority: null,
                                    members: null
                                }
                                tasks.id = taskInstances[indexTask].id_task
                                tasks.name = taskInstances[indexTask].name
                                tasks.description = taskInstances[indexTask].description
                                tasks.date = taskInstances[indexTask].dateTask
                                tasks.priority = 2
                                newObject.tasks.push(tasks)
                            }
                            objectRubric.push(newObject)


                        }
                        else {
                            objectRubric.push(newObject)

                        }
                    }

                }
            }

            res.status(201).send({
                rubrics: objectRubric,
                name: todolistJson.name,
                isFavorite: todolistJson.is_favorite,
                message: "The request has been received"
            })
        } catch (error) {
            console.log(error)
            res.status(400).send({
                error: "An error occured during the request"
            })
        }
    }
}