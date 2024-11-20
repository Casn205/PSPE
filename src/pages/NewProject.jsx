import { useState } from "react";
import axios from 'axios';
import { facultades } from '../Data/Data'; // Ensure this path is correct

const NewProject = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    objetivos: "",
    estado: "",
    lider: "",
    guia: "",
    colaboradores: [""],
    facultades: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleColaboradorChange = (index, value) => {
    const newColaboradores = [...formData.colaboradores];
    newColaboradores[index] = value;
    setFormData({ ...formData, colaboradores: newColaboradores });
  };

  const addColaborador = () => {
    setFormData({ ...formData, colaboradores: [...formData.colaboradores, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://3r1cj74n-3000.use2.devtunnels.ms/proyectos/registrar', {
        "titulo": "Desarrolalo de Aplicación Web",
        "estado": "En progreso",
        "descripcion": "Creación de una aplicación web para gestión de proyectos.",
        "objetivos": "Desarrollar una plataforma robusta para la gestión de tareas y pwroyectos.",
        "facultades": 5,
        "lider": "lider@ejemplo.com",
        "guia": "guia@ejemplo.com",
        "colaboradores": [
            "colaborador1@ejemplo.com",
            "colaborador2@ejemplo.com"
        ]
      });
      console.log('Proyecto creado:', response.data);
      alert('Proyecto guardado exitosamente!');
      setFormData({
        titulo: "",
        descripcion: "",
        objetivos: "",
        estado: "",
        lider: "",
        guia: "",
        colaboradores: "",
        facultades: ""
      });
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      alert('Error al guardar el proyecto. Por favor, intente de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-16">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Nuevo Proyecto</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        /*{/* Título */}
        <div>
          <label htmlFor="titulo" className="block text-gray-700">
            Título del Proyecto:
          </label>
          <input
            type="text"
            id="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            placeholder="Ingresa el título del proyecto"
            required
          />
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="descripcion" className="block text-gray-700">
            Descripción:
          </label>
          <textarea
            id="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            placeholder="Describe el proyecto"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Objetivos */}
        <div>
          <label htmlFor="objetivos" className="block text-gray-700">
            Objetivos:
          </label>
          <textarea
            id="objetivos"
            value={formData.objetivos}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            placeholder="Escribe los objetivos del proyecto"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Estado */}
        <div>
          <label htmlFor="estado" className="block text-gray-700">
            Estado:
          </label>
          <select
            id="estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
          >
            <option value="" disabled>
              Selecciona el estado
            </option>
            <option value="En progreso">En progreso</option>
            <option value="Completado">Completado</option>
            <option value="Pendiente">Pendiente</option>
          </select>
        </div>

        {/* Facultad */}
        <div>
          <label htmlFor="facultades" className="block text-gray-700">
            Facultad:
          </label>
          <select
            id="facultades"
            value={formData.facultades}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
          >
            <option value="" disabled>
              Selecciona la facultad
            </option>
            {facultades.map((facultad) => (
              <option key={facultad.id} value={facultad.id}>
                {facultad.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Líder del Proyecto */}
        <div>
          <label htmlFor="lider" className="block text-gray-700">
            Líder del Proyecto (Correo electrónico):
          </label>
          <input
            type="email"
            id="lider"
            value={formData.lider}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            placeholder="Ingresa el correo del líder del proyecto"
            required
          />
        </div>

        {/* Docente Guía */}
        <div>
          <label htmlFor="guia" className="block text-gray-700">
            Docente Guía (Correo electrónico):
          </label>
          <input
            type="email"
            id="guia"
            value={formData.guia}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            placeholder="Ingresa el correo del docente guía"
            required
          />
        </div>

        {/* Colaboradores */}
        <div>
          <label className="block text-gray-700 mb-2">Colaboradores:</label>
          {formData.colaboradores.map((colaborador, index) => (
            <div key={index} className="mb-2">
              <input
                type="email"
                value={colaborador}
                onChange={(e) => handleColaboradorChange(index, e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                placeholder={`Correo del colaborador ${index + 1}`}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addColaborador}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Agregar Colaborador
          </button>
        </div>

        {/* Botón de Guardar */}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Guardar Proyecto
        </button>
      </form>
    </div>
  );
};

export default NewProject;