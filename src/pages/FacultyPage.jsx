import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { facultades } from '../Data/Data';

export default function FacultyPage() {
  const { facultyName } = useParams();
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const facultad = facultades.find(
    (f) => f.path === `/facultad/${facultyName}`
  );

  useEffect(() => {
    console.log('Current facultad:', facultad);
  }, [facultad]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch('/api/proyectos/obtener');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched projects:', data);
        const filteredProyectos = data.filter(proyecto => proyecto.facultades === facultad.id);
        console.log('Filtered projects:', filteredProyectos);
        setProyectos(filteredProyectos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Error fetching projects: ' + error.message);
        setLoading(false);
      }
    };

    if (facultad) {
      fetchProyectos();
    }
  }, [facultad]);

  if (!facultad) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Facultad no encontrada
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
          {facultad.nombre}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
          {facultad.descripcion}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Proyectos de la Facultad</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <p className="text-lg text-gray-600">Cargando proyectos...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : proyectos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="font-bold text-xl mb-2">{proyecto.titulo || 'Sin título'}</h3>
                  <p className="text-gray-700 text-base mb-2">
                    {proyecto.descripcion || 'Sin descripción'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Estado:</span> {proyecto.estado || 'No especificado'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Objetivos:</span> {proyecto.objetivos || 'No especificados'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Facultad ID:</span> {proyecto.facultades || 'No especificada'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
            <p className="font-bold">No hay proyectos</p>
            <p>Actualmente no hay proyectos disponibles para esta facultad.</p>
          </div>
        )}
      </div>
    </div>
  );
}