const { User, Have, ToDoList, Rubric, Task } = require("../models")
const { Op } = require("sequelize");
const { number } = require("joi");
module.exports = {
    async getLists(req, res) {
        try {

            const todolistarray = [];
            const { id_user } = req.body
            const having = await Have.findAll({
                raw: true,
                where: {
                    id_user: id_user
                }
            })
            if (having) {
                for (let i = 0; i < having.length; i++) {
                    todolistelement = await ToDoList.findAll({
                        raw: true,
                        where: {
                            id_todolist: having[i].id_todolist
                        }
                    })
                    for (let i = 0; i < todolistelement.length; i++) {
                        todolistarray.push({
                            id_todolist: todolistelement[i].id_todolist,
                            name: todolistelement[i].name,
                            is_favorite: todolistelement[i].is_favorite,
                            numberTasks: 0,
                            member: null
                        })
                    }

                }

            }
            if (todolistarray.length != 0) {
                for (let i = 0; i < todolistarray.length; i++) {
                    const rubric = await Rubric.findAll({
                        raw: true,
                        where: {
                            id_todolist: todolistarray[i].id_todolist
                        }
                    })
                    let numberTasks = 0;
                    if (rubric.length != 0) {

                        for (let l = 0; l < rubric.length; l++) {

                            const task = await Task.findAll({
                                raw: true,
                                where: {
                                    id_rubric: rubric[l].id_rubric
                                }
                            })
                            numberTasks += task.length;


                        }



                    }
                    todolistarray[i].numberTasks = numberTasks

                }

            }

            res.status(201).send({
                todolist: todolistarray
            })
        } catch (error) {
            res.status(400).send({
                error: "Error raised during the request."
            })
        }
    }
}