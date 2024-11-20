import { Link } from 'react-router-dom';
import { facultades } from '../Data/Data';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-green-600 text-lg font-bold">
          <Link to="/">Gestión Académica</Link>
        </div>

        {/* Enlaces de navegación */}
        <div className="space-x-6 text-gray-700 font-medium flex items-center">
          <Link to="/" className="hover:text-green-600 transition">
            Inicio
          </Link>

          {/* Menú de Facultades */}
          <div className="relative group">
            <button className="hover:text-green-600 transition px-6 py-3 text-lg">
              Facultades
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10 w-48">
              <ul className="text-left py-2">
                {facultades.map((facultad) => (
                  <li key={facultad.nombre}>
                    <Link
                      to={facultad.path}
                      className="block px-4 py-3 hover:bg-gray-100 text-base"
                    >
                      {facultad.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Menú de Estados de Proyectos */}
          <div className="relative group">
            <button className="hover:text-green-600 transition px-6 py-3 text-lg">
              Estado de Proyectos
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10 w-48">
              <ul className="text-left py-2">
                <li>
                  <Link
                    to="/proyectos/planeacion"
                    className="block px-4 py-3 hover:bg-gray-100 text-base"
                  >
                    Planeación
                  </Link>
                </li>
                <li>
                  <Link
                    to="/proyectos/desarrollo"
                    className="block px-4 py-3 hover:bg-gray-100 text-base"
                  >
                    Desarrollo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/proyectos/evaluacion"
                    className="block px-4 py-3 hover:bg-gray-100 text-base"
                  >
                    Evaluación
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Botón Agregar Proyecto */}
          <Link
            to="/Agregar"
            className="hover:text-green-600 transition px-6 py-3 text-lg"
          >
            Agregar Proyecto
          </Link>

          <Link to="/mis-proyectos" className="hover:text-green-600 transition">
            Mis Proyectos
          </Link>
          <Link
            to="/iniciar-sesion"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition text-lg"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
