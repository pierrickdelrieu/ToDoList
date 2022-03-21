import Api from "./Api"

export default {
    post(data) {
        return Api().post("deleteTodolist", data)
    }
}

// AuthenticationService.register({
//     email: "fzefezo@gmail.com",
//     password: "1665322"
// })