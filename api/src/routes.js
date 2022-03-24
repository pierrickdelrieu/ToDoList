const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const DashboardController = require("./controllers/DashBoardController");
const UpdateUser = require("./controllers/UpdateUser")
const createNewListController = require("./controllers/createNewListController")
const UpdateFavorite = require("./controllers/UpdateFavoriteController")
const DeleteTodolist = require("./controllers/DeleteTodolistController")
const getRubricsController = require("./controllers/getRubricsController")
const CreateNewTaskController = require("./controllers/CreateNewTaskController")
const DeleteRubricController = require("./controllers/DeleteRubricController")
const CreateRubricController = require("./controllers/CreateRubricController")
const RemoveTaskController = require("./controllers/RemoveTaskController")
const UpdateTaskController = require("./controllers/UpdateTaskController")
module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
    app.post('/dashboard', DashboardController.getLists)
    app.post("/userUpdate", UpdateUser.updateUser)
    app.post("/newList", createNewListController.createList)
    app.post("/updateTodolist", UpdateFavorite.updateFavorite)
    app.post("/deleteTodolist", DeleteTodolist.deleteTodo)
    app.post("/getrubrics", getRubricsController.getRubrics)
    app.post("/createNewTask", CreateNewTaskController.createNewTask)
    app.post("/deleteRubric", DeleteRubricController.deleteRubric)
    app.post("/createRubric", CreateRubricController.createRubric)
    app.post("/removeTask", RemoveTaskController.removeTask)
    app.post("/updateTask", UpdateTaskController.updateTask)


}
