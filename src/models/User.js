const sequelize = require("../utils/connection");
const {DataTypes} = require("sequelize");

const User = sequelize.define("user", {
    firstName : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
});

module.exports = User;