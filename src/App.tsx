import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { PasswordGate } from './components/PasswordGate';
import { Home } from './pages/Home';
import { ProjectsList, ProjectDetail } from './pages/Projects';
import { About } from './pages/About';
import { Views } from './pages/Views';
import { CV } from './pages/CV';
import './index.css';

function Gated() {
  return (
    <PasswordGate>
      <Nav />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/projects"     element={<ProjectsList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about"        element={<About />} />
        <Route path="/views"        element={<Views />} />
        <Route path="/cv"           element={<CV />} />
        <Route path="*"             element={<Navigate to="/" replace />} />
      </Routes>
    </PasswordGate>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*"       element={<Gated />} />
      </Routes>
    </BrowserRouter>
  );
}