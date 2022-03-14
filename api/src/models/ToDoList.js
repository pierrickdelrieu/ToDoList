const User = require("./User")
const Rubric = require("./Rubric")
module.exports = (sequelize, DataTypes) => {
    const ToDoList = sequelize.define("ToDoList", {
        name: {
            type: DataTypes.STRING(50),
            unique: false
        },
        is_favorite: {
            type: DataTypes.BOOLEAN,
            unique: false
        },
        id_user: {
            type: DataTypes.INTEGER,
        },
        id_Rubric: {
            type: DataTypes.INTEGER
        }
    })
    ToDoList.associate = function (models) {
        ToDoList.hasMany(models.User, {
            constraints: false,
            allowNull: false,
            foreignKey: "id_user"
        }),
            ToDoList.hasMany(models.Rubric, {
                constaints: false,
                allowNull: true,
                foreignKey: "id_Rubric"
            })
    }
    return ToDoList
}