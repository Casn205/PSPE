// models/Users.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true, // Valida que el valor sea un correo electrónico
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'usuario', // Valor por defecto, puede ser 'admin' u otros roles
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activo', // Puede ser 'activo', 'inactivo', etc.
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Users',
});

module.exports = Users;
