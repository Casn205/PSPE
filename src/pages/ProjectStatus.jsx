import { useState } from 'react';
import { estadosProyectos } from '../Data/Data';

const ProjectStatus = () => {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState('planeacion');

  return (
    <div className="min-h-screen bg-white px-6 pt-16">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Estado de Proyectos
      </h1>
      <div className="relative w-1/2 mx-auto mb-6">
        <select
          value={estadoSeleccionado}
          onChange={(e) => setEstadoSeleccionado(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring focus:ring-green-300"
        >
          {Object.keys(estadosProyectos).map((estado) => (
            <option key={estado} value={estado}>
              {estado.charAt(0).toUpperCase() + estado.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-3">
        {estadosProyectos[estadoSeleccionado].map((proyecto, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-sm text-gray-800 font-medium"
          >
            {proyecto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectStatus;
