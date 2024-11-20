import FacultyCard from '../components/FacultyCard';
import { facultades } from '../Data/Data'; // Importar datos

const Home = () => {
  return (
    <div className="min-h-screen bg-white px-6 pt-16">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Gestión de Proyectos Académicos
        </h1>
        <p className="text-lg text-gray-600">
          Explora las facultades y gestiona proyectos académicos con facilidad.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultades.map((facultad) => (
          <FacultyCard
            key={facultad.id}
            faculty={{
              name: facultad.nombre,
              image: facultad.imagen,
            }}
            onClick={() => window.location.href = facultad.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;