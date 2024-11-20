import { proyectosUsuario } from '../Data/Data'; // Importar proyectos

const MyProjects = () => {
  return (
    <div className="min-h-screen bg-white px-6 pt-16">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Mis Proyectos</h1>
      <ul className="space-y-4">
        {proyectosUsuario.map((proyecto) => (
          <li
            key={proyecto.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <span className="text-lg font-semibold text-gray-800">
              {proyecto.nombre}
            </span>
            <div>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Ver
              </button>
              <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition ml-3">
                Editar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProjects;
