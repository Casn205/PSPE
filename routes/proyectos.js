
const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
//const authMiddleware = require('../middlewares/authMiddleware');

router.post('/registro', proyectoController.createProject);

router.post('/registrar', proyectoController.createProjectbyview);

router.get('/obtener', proyectoController.getAllProjects);

router.get('/obtener/:categoria', );

//outer.get('/obtener/:id', ;

//router.put('/actualizar/:id', authMiddleware,);

//router.delete('/eliminar/:id', authMiddleware, );



module.exports = router;
