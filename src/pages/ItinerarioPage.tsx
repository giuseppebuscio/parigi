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
                18 ottobre
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-800 mb-2">✈️ Arrivo in aeroporto</div>
                  <div>• Orly 11:30 - Caterina e Saverio</div>
                  <div>• Orly 13:00 - Cristina e Peppe</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-800 mb-2">🏠 Casa</div>
                  <div>45 rue du Docteur Babinski, 18° arrondissement, 75018 Parigi</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Metro 14 viola → Saint-Lazare + Metro 13 azzurra → Porte de Saint-Ouen (52 min)
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-800">🍽️ Pranzo vicino casa</div>
                </div>

                <div className="font-medium text-gray-800 mb-2">Pomeriggio:</div>
                <div className="space-y-2">
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
                    <span><strong>Giro battello + Torre Eiffel illuminata</strong></span>
                  </div>
                  <div className="text-xs text-gray-500 ml-4">
                    Partenze: 19:00, 20:00, 20:30, 21:00, 21:30, 22:00<br/>
                    Torre sbrilluccica dalle 22 ogni ora
                  </div>
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
                  <span><strong>Reggia di Versailles</strong> (1h 17min da casa) - ore 10:00 (andare un po' prima)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Museo D'Orsay</strong> (48 min mezzi) - ore 16:00</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Galleria Lafayette Haussmann</strong> (22 min mezzi)</span>
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
                  <span><strong>Place de la Concorde</strong> (opzionale)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Pont Alexandre III</strong> (opzionale)</span>
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
                  <span><strong>Opera Garnier</strong> (27 min metro) - chiude alle 17, ultimo ingresso alle 15</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-gray-800 mr-2">•</span>
                  <span><strong>Palazzo degli artisti</strong> (11 min mezzi) - offerta libera</span>
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
