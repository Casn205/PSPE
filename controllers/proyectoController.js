
const ProyectoTrabajo = require('../models/Proyectos');

const createProject = async (req, res) => {
    try {
        const { titulo, descripcion, objetivos, estado, facultades } = req.body;
        const newProject = await ProyectoTrabajo.create({titulo, descripcion, objetivos, estado, facultades  });
        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error al crear Proyecto de trabajo:', error);
        res.status(500).json({ error: 'Error al crear Proyecto de trabajo' });
    }
};

const createProjectbyview = async (req, res) => {
    try {
      
        const { titulo, descripcion, objetivos, estado, facultades, lider, guia, colaboradores } = req.body;

       
        if (!facultades || typeof facultades !== 'number' || facultades < 1 || facultades > 7) {
            return res.status(400).json({ error: 'Facultades debe ser un número entre 1 y 7.' });
        }

        // Crear el nuevo proyecto
        const newProject = await ProyectoTrabajo.create({
            titulo,
            descripcion,
            objetivos,
            estado,
            facultades, 
            lider,
            guia,
            colaboradores
        });

        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error al crear Proyecto de trabajo:', error);
        res.status(500).json({ error: 'Error al crear Proyecto de trabajo' });
    }
};


const getAllProjects = async (req, res) => {
    try {
        const Projects = await ProyectoTrabajo.findAll();
        res.json(Projects);
    } catch (error) {
        console.error('Error al obtener Proyectos:', error);
        res.status(500).json({ error: 'Error al obtener Proyectos' });
    }
};

const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const Project = await User.findByPk(id);
        if (Project) {
            res.json(Project);
        } else {
            res.status(404).json({ error: 'Proyecto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener Proyecto:', error);
        res.status(500).json({ error: 'Error al obtener el Proyecto' });
    }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await ProyectoTrabajo.update(req.body, {
            where: { id },
        });
        if (updated) {
            const updatedProject = await ProyectoTrabajo.findByPk(id);
            res.json(updatedProject);
        } else {
            res.status(404).json({ error: 'Proyecto no encontrado' });
        }
    } catch (error) {Proyecto
        console.error('Error al obtener Proyecto:', error);
        res.status(500).json({ error: 'Error al actualizar el Proyecto' });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ProyectoTrabajo.destroy({
            where: { id },
        });
        if (deleted) {
            res.json({ message: 'Proyecto eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Proyecto no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar Proyecto:', error);
        res.status(500).json({ error: 'Error al eliminar Proyecto' });
    }
};

const findProjectByCategory = async (categoria) => {
    try {
        const Proyecto = await ProyectoTrabajo.findOne({ where: { categoria } });
        return Proyecto;
    } catch (error) {
        console.error('Error al buscar el Proyecto por categoría:', error);
        throw error;
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    findProjectByCategory,
    createProjectbyview
};