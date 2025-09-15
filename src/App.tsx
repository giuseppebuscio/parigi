import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AttractionPage from './pages/AttractionPage';

// Componente per tornare in cima alla pagina ad ogni cambio di route
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const attractions = [
  {
    id: 'museo-dorsay',
    name: 'Museo D\'Orsay',
    path: '/museo-dorsay'
  },
  {
    id: 'museo-louvre',
    name: 'Museo Louvre',
    path: '/museo-louvre'
  },
  {
    id: 'saint-chapelle',
    name: 'Saint Chapelle',
    path: '/saint-chapelle'
  },
  {
    id: 'notre-dame',
    name: 'Notre Dame',
    path: '/notre-dame'
  },
  {
    id: 'battello-senna',
    name: 'Battello sulla Senna',
    path: '/battello-senna'
  },
  {
    id: 'reggia-versailles',
    name: 'Reggia di Versailles',
    path: '/reggia-versailles'
  },
  {
    id: 'opera-paris',
    name: 'Opera de Paris',
    path: '/opera-paris'
  }
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage attractions={attractions} />} />
          {attractions.map(attraction => (
            <Route 
              key={attraction.id} 
              path={attraction.path} 
              element={<AttractionPage attraction={attraction} />} 
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;