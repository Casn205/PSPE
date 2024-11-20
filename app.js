const express = require('express');
const { testConnection, sequelize } = require('./database');
require('dotenv').config();
const Proyectos = require('./models/Proyectos');
const Facultades = require('./models/Facultades');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API!');
});

app.use('/proyectos/', require('./routes/proyectos'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});


module.exports = { app, startServer: async () => {
    try {
        await testConnection();
        await sequelize.sync({ alter: true, force: true });
        console.log('Modelos sincronizados con la base de datos.');
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
}};
