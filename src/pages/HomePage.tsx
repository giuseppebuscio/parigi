import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Attraction {
  id: string;
  name: string;
  path: string;
}

interface HomePageProps {
  attractions: Attraction[];
}

const HomePage: React.FC<HomePageProps> = ({ attractions }) => {
  const navigate = useNavigate();

  // Lista delle attrazioni con biglietti disponibili
  const attractionsWithTickets = ['museo-dorsay', 'saint-chapelle', 'reggia-versailles', 'museo-louvre', 'battello-senna'];
  
  // Attrazioni con biglietti acquistati
  const attractionsPurchased: string[] = [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative w-full h-64 mb-8">
        <img 
          src="/images/parigi.jpg" 
          alt="Parigi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-0 right-0 text-center px-4">
          <h1 className="text-4xl font-light text-white mb-2 tracking-tight">
            Viaggio a Parigi
          </h1>
          <div className="w-16 h-0.5 bg-white/60 mx-auto mb-3"></div>
          <p className="text-sm text-white/90">
            Scopri le meraviglie di Parigi
          </p>
        </div>
      </div>

      <div className="px-4 pb-8">
        <div className="max-w-md mx-auto">
          {/* Attractions Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
              Attrazioni
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Seleziona un'attrazione per vedere i biglietti, le ricevute e altre informazioni
            </p>
          </div>

        {/* Attractions Grid */}
        <div className="space-y-3">
          {attractions.map((attraction) => (
            <button
              key={attraction.id}
              onClick={() => navigate(attraction.path)}
              className="w-full bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:bg-gray-50 transition-all duration-200 active:scale-95"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <div className="text-lg font-medium text-gray-900">
                    {attraction.name}
                  </div>
                  <div className={`text-xs mt-0.5 ${
                    attractionsWithTickets.includes(attraction.id) 
                      ? 'text-green-600 font-medium' 
                      : attractionsPurchased.includes(attraction.id)
                      ? 'text-gray-500'
                      : 'text-gray-500'
                  }`}>
                    {attractionsWithTickets.includes(attraction.id) 
                      ? 'Biglietti disponibili' 
                      : attractionsPurchased.includes(attraction.id)
                      ? 'In arrivo il 15 ott'
                      : 'Biglietti non disponibili'
                    }
                  </div>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Itinerario Section */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
              Itinerario
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Visualizza il programma dettagliato del viaggio
            </p>
          </div>
          
          <button
            onClick={() => navigate('/itinerario')}
            className="w-full bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:bg-gray-50 transition-all duration-200 active:scale-95"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-lg font-medium text-gray-900">
                  Programma del viaggio
                </div>
                <div className="text-xs mt-0.5 text-gray-500">
                  Visualizza l'itinerario completo
                </div>
              </div>
              <svg 
                className="w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
