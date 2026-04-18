import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { ProjectsList, ProjectDetail } from './pages/Projects';
import { About } from './pages/About';
import { Views } from './pages/Views';
import { CV } from './pages/CV';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/projects"       element={<ProjectsList />} />
        <Route path="/projects/:id"   element={<ProjectDetail />} />
        <Route path="/about"          element={<About />} />
        <Route path="/views"          element={<Views />} />
        <Route path="/cv"             element={<CV />} />
        <Route path="*"               element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}