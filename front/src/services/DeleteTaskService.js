import Api from "./Api"

export default {
    post(data) {
        return Api().post("deleteTask", data)
    }
}
