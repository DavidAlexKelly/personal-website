import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { ProjectsList, ProjectDetail } from './pages/Projects';
import { About } from './pages/About';
import './index.css';

// ─────────────────────────────────────────────
//  ADDING A NEW SECTION?
//  1. Add entries to src/data/projects.ts
//  2. If it's an embedded sub-app, add its source to /projects/<id>/
//     and add a rewrite to vercel.json
//  3. That's it — tags and filtering are automatic
// ─────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/projects"       element={<ProjectsList />} />
        <Route path="/projects/:id"   element={<ProjectDetail />} />
        <Route path="/about"          element={<About />} />
        <Route path="*"               element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
