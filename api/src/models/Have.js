const User = require("./User")
const ToDolist = require("./ToDoList")
module.exports = (sequelize, DataTypes) => {
    const Have = sequelize.define("Have", {
        id_have: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },
        {
            timestamps: false
        })




    return Have
}