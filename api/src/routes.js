const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const DashboardController = require("./controllers/DashBoardController");
const UpdateUser = require("./controllers/UpdateUser")
const createNewListController = require("./controllers/createNewListController")
module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
    app.post('/dashboard', DashboardController.getLists)
    app.post("/userUpdate", UpdateUser.updateUser)
    app.post("/newList", createNewListController.createList)


}
