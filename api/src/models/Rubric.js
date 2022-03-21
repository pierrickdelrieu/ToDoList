const ToDoList = require("./ToDoList")
const Task = require("./Task")
module.exports = (sequelize, DataTypes) => {
    const Rubric = sequelize.define("Rubric", {
        id_rubric: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            unique: false
        }
    },
        {
            timestamps: false

        })

    Rubric.associate = function (models) {
        Rubric.belongsTo(models.ToDoList, {
            constraints: false,
            allowNull: false,
            foreignKey: "id_todolist"
        })
    }


    return Rubric
}