module.exports = (sequelize, DataTypes) => {
    const ToDoList = sequelize.define("ToDoList", {
        id_todolist: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            unique: false
        },
        is_favorite: {
            type: DataTypes.BOOLEAN,
            unique: false
        }
    }, {
        timestamps: false


    })

    ToDoList.associate = function (models) {
        ToDoList.hasMany(models.Rubric, {
            constaints: false,
            allowNull: true,
            foreignKey: "id_todolist"
        }),
            ToDoList.hasMany(models.Have, {
                constaints: false,
                allowNull: true,
                foreignKey: "id_todolist",
                defaultValue: null
            })


    }
    return ToDoList
}