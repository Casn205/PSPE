import { useParams } from 'react-router-dom';
import { facultades } from '../Data/Data'; // Importar datos

const FacultyPage = () => {
  const { facultyName } = useParams();

  const facultad = facultades.find(
    (f) => f.path === `/facultad/${facultyName}`
  );

  return (
    <div className="min-h-screen bg-white px-6 pt-16 text-center">
      {facultad ? (
        <>
          <h1 className="text-4xl font-bold text-green-600 mb-6">
            {facultad.nombre}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {facultad.descripcion}
          </p>
        </>
      ) : (
        <h1 className="text-4xl font-bold text-red-600">
          Facultad no encontrada
        </h1>
      )}
    </div>
  );
};

export default FacultyPage;
