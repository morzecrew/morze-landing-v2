import { Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import HomePage from './pages/HomePage';
import RadioavionikaCase from './pages/RadioavionikaCase';
import EfaMedikaCase from './pages/EfaMedikaCase';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cases/radioavionika" element={<RadioavionikaCase />} />
        <Route path="/cases/efa-medika" element={<EfaMedikaCase />} />
      </Routes>
    </>
  );
}
