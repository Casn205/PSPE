// models/Proyectos

const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Proyectos = sequelize.define('Proyectos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    objetivos: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    facultades: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 7,
        },
    },
    lider: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    guia: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    colaboradores: {
        type: DataTypes.JSON,
        allowNull: true,
        validate: {
            isArrayOfEmails(value) {

                if (typeof value === 'string') {
                    value = [value];
                }

                if (Array.isArray(value)) {
                    value.forEach(email => {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(email)) {
                            throw new Error(`El correo electrónico ${email} no es válido.`);
                        }
                    });
                } else if (value !== null) {
                    throw new Error('El campo colaboradores debe ser un string o un array de correos electrónicos.');
                }
            },
        },
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
    tableName: 'Proyectos', 
});

module.exports = Proyectos;
