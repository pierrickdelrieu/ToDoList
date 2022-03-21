const Promise = require("bluebird")
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"))
const models = require("../models")
const ToDoList = require("./ToDoList")
function hashPassword(user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return;
    }
    return bcrypt.genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue("password", hash)
        })
}

/**
 * 
 * @param {*} sequelize : library sequelize 
 * @param {*} DataTypes 
 * @returns 
 */




module.exports = (sequelize, DataTypes) => {

    /**
     * Creation of a model called User, which contains 4 fields : firstname ; lastname ; email ; password
     * The parameter hooks is used to do some actions at a precise time of the model life cycle inside the script. In this 
     * case, we use our function hasPassword in order to hash the password, before the creation of an instance model.
     * 
     * https://sequelize.org/master/manual/model-basics.html
     */
    const User = sequelize.define("User", {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING(50),
            unique: false
        },
        lastname: {
            type: DataTypes.STRING(50),
            unique: false
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })
    /* We add a method comparePassword, in the model prototype, in order to access it in every instance.
    The method comparePassword allow us to compare a password hashed with the password hashed and stored inside the database.
    It's used when the user is trying to log itself inside the site.*/
    User.prototype.comparePassword = function (password) {

        return bcrypt.compareAsync(password, this.password)
    }
    User.associate = function (models) {
        User.hasMany(models.Have, {
            constraints: false,
            allowNull: true,
            defaultValue: null,
            foreignKey: "id_user"
        })
    }


    return User
}
