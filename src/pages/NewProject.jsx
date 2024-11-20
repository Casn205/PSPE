// src/pages/NuevoProyecto.jsx
const NewProject = () => {
    return (
      <div className="min-h-screen bg-white px-6 pt-16">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Nuevo Proyecto</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-gray-700">
              Nombre del Proyecto:
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              placeholder="Ingresa el nombre del proyecto"
            />
          </div>
          <div>
            <label htmlFor="descripcion" className="block text-gray-700">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              placeholder="Describe el proyecto"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Guardar Proyecto
          </button>
        </form>
      </div>
    );
  };
  
  export default NewProject;
  