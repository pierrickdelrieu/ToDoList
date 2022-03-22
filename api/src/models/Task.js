const Rubric = require("./Rubric")
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
        id_task: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            unique: false
        },
        description: {
            type: DataTypes.STRING(500),
            unique: false
        },
        dateTask: {
            type: DataTypes.DATE,
            unique: false
        },
        priority: {
            type: DataTypes.INTEGER,
            unique: false
        }
    },

        {
            /* Remove the timestamps (CreatedAt and UpdatedAt) from the model*/
            timestamps: false

        })
    Task.associate = function (models) {
        Task.belongsTo(models.Rubric, {
            constraints: false,
            allowNull: false,
            foreignKey: "id_rubric"
        })
    }
    return Task
}