import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import FacultyPage from './pages/FacultyPage';
import ProjectStatus from './pages/ProjectStatus';
import MyProjects from './pages/MyProjects';
import Login from './pages/Login';
import NewProject from './pages/NewProject';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-white mt-16"> {/* Ajuste de margen superior */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facultad/:facultyName" element={<FacultyPage />} />
          <Route path="/proyectos/:estado" element={<ProjectStatus />} />
          <Route path="/mis-proyectos" element={<MyProjects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Agregar" element={<NewProject />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
