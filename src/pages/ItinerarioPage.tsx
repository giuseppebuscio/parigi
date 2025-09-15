import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItinerarioPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-md mx-auto">
        {/* Header con back button */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate('/')}
            className="mr-4 p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
          <h1 className="text-2xl font-light text-gray-900">
            Itinerario
          </h1>
        </div>

        {/* Immagine di copertina */}
        <div className="mb-8">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="/images/parigi.jpg" 
              alt="Itinerario Parigi"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-center leading-relaxed text-sm">
                Programma dettagliato del viaggio a Parigi
              </p>
            </div>
          </div>
        </div>

        {/* Contenuto dell'itinerario */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
            Programma del viaggio
          </h2>
          <div className="space-y-4">
            {/* 18 ottobre */}
            <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
              <div className="text-lg font-medium text-gray-900 mb-3">
                18 ottobre - Pomeriggio
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Arco di Trionfo</strong> (30 min mezzi da casa)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Galleria Lafayette Champs Elysees</strong> (13 min a piedi) - strada piena di negozi + macarons Pierre Hermès</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Piazza Trocadero</strong> (12 min mezzi) - vista Torre Eiffel (no foto con topolino! 😂)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Giro battello + Torre Eiffel illuminata</strong> - 17€ a testa, prenotazione fatta</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Torre si illumina la sera, sbrilluccica ogni ora dalle 22
                </div>
              </div>
            </div>

            {/* 19 ottobre */}
            <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
              <div className="text-lg font-medium text-gray-900 mb-3">
                19 ottobre
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Versailles</strong> (1h 17min da casa) - 21-32€</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Museo D'Orsay</strong> - pranzo possibile nel museo (cibo e prezzi buoni)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Galleria Lafayette Haussmann</strong> (3 min a piedi)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Moulin Rouge</strong> da fuori (13 min mezzi)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Muro del ti amo</strong> (se aperto, 10 min a piedi)</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Ritorno a casa
                </div>
              </div>
            </div>

            {/* 20 ottobre */}
            <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
              <div className="text-lg font-medium text-gray-900 mb-3">
                20 ottobre
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Louvre</strong> (40 min metro) - ingresso ore 10:00</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Sainte Chapelle</strong> (7 min bus) - ingresso ore 13:00</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Ponte memoriale Lady Diana</strong> (vicino a Sainte Chapelle)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Notre Dame</strong> (9 min a piedi) - prenotare l'entrata</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Opera Garnier</strong> - chiude alle 17, ultimo ingresso alle 15</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Place de la Concorde</strong> (10 min a piedi)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Pont Alexandre III</strong> (9 min a piedi)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Montmartre</strong> (33 min metro) - Basilica + Place du Tertre</span>
                </div>
              </div>
            </div>

            {/* 21 ottobre */}
            <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
              <div className="text-lg font-medium text-gray-900 mb-3">
                21 ottobre
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Palazzo degli artisti</strong> (se volete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Altri giri per la città</strong></span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Partenze
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItinerarioPage;
