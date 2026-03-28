import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { IdeasList, IdeaDetail } from './pages/Ideas';
import { BuiltList, BuiltDetail } from './pages/Built';
import { WritingList, EssayDetail } from './pages/Writing';
import { About } from './pages/About';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/ideas"       element={<IdeasList />} />
        <Route path="/ideas/:id"   element={<IdeaDetail />} />
        <Route path="/built"       element={<BuiltList />} />
        <Route path="/built/:id"   element={<BuiltDetail />} />
        <Route path="/writing"     element={<WritingList />} />
        <Route path="/writing/:id" element={<EssayDetail />} />
        <Route path="/about"       element={<About />} />
        <Route path="*"            element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
