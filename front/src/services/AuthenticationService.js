import Api from "./Api"

export default {
    register(credentials) {
        return Api().post("register", credentials)
    },
    login(credentials) {
        return Api().post('login', credentials)
    }
}

// AuthenticationService.register({
//     email: "fzefezo@gmail.com",
//     password: "1665322"
// })