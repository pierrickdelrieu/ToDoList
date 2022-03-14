const Rubric = require("./Rubric")
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
        name: {
            type: DataTypes.STRING(50),
            unique: false
        },
        description: {
            type: DataTypes.STRING(50),
            unique: false
        },
        id_Rubric: {
            type: DataTypes.INTEGER,
        }
    })
    Task.associate = function (models) {
        Task.hasOne(models.Rubric, {
            constraints: false,
            allowNull: false,
            foreignKey: "id_Rubric"
        })
    }
    return Task
}