const ToDoList = require("./ToDoList")
const Task = require("./Task")
module.exports = (sequelize, DataTypes) => {
    const Rubric = sequelize.define("Rubric", {
        name: {
            type: DataTypes.STRING(50),
            unique: false
        },
        id_ToDoList: {
            type: DataTypes.INTEGER,
            unique: true
        }, id_Task: {
            type: DataTypes.INTEGER,
            unique: false
        }
    })
    Rubric.associate = function (models) {
        Rubric.hasOne(models.ToDoList, {
            constraints: false,
            allowNull: false,
            foreignKey: "id_ToDoList"
        }),
            Rubric.hasMany(models.Task, {
                constraints: false,
                allowNull: true,
                foreingKey: "id_Task"
            })
    }
    return Rubric
}