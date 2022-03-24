import Api from "./Api"

export default {
    post(data) {
        return Api().post("updateTask", data)
    }
}
