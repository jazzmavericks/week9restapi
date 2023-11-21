const {DataTypes} = require("sequelize");
const SQLconnection = require("../db/connection");

const User = SQLconnection.define("User",{
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User;