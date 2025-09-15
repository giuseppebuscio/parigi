import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Attraction {
  id: string;
  name: string;
  path: string;
}

interface AttractionPageProps {
  attraction: Attraction;
}

const AttractionPage: React.FC<AttractionPageProps> = ({ attraction }) => {
  const navigate = useNavigate();

  // Dati specifici per ogni attrazione
  const attractionData = {
    'museo-dorsay': {
      description: 'Museo d\'arte impressionista e post-impressionista',
      image: '/images/museo-dorsay-cover.webp',
      tickets: [
        { name: 'Saverio Buscio', price: '', pdf: '/biglietti/museodorsay/saverio-buscio.pdf' },
        { name: 'Caterina Alaimo', price: '', pdf: '/biglietti/museodorsay/caterina-alaimo.pdf' },
        { name: 'Cristina Fiorenza', price: '', pdf: '/biglietti/museodorsay/cristina-fiorenza.pdf' },
        { name: 'Giuseppe Scopelliti', price: '', pdf: '/biglietti/museodorsay/giuseppe-scopelliti.pdf' }
      ],
      receipts: [
        { name: 'Ricevuta Acquisto', pdf: '/ricevute/museodorsay/ricevuta-acquisto.pdf' }
      ],
      website: 'https://www.musee-orsay.fr/it'
    },
    'museo-louvre': {
      description: 'Il più grande museo del mondo',
      image: '/images/museo-louvre.jpg',
      tickets: [
        { name: 'Saverio Buscio', price: '', pdf: '/biglietti/museo-louvre/saverio-buscio.pdf' },
        { name: 'Caterina Alaimo', price: '', pdf: '/biglietti/museo-louvre/caterina-alaimo.pdf' },
        { name: 'Cristina Fiorenza', price: '', pdf: '/biglietti/museo-louvre/cristina-fiorenza.pdf' },
        { name: 'Giuseppe Scopelliti', price: '', pdf: '/biglietti/museo-louvre/giuseppe-scopelliti.pdf' }
      ],
      receipts: [
        { name: 'Ricevuta Acquisto', pdf: '/ricevute/museo-louvre/ricevuta-acquisto.pdf' }
      ],
      website: 'https://www.louvre.fr'
    },
    'saint-chapelle': {
      description: 'Cappella gotica con vetrate spettacolari',
      image: '/images/saint-chapelle.avif',
      tickets: [
        { name: 'Saverio Buscio', price: '', pdf: '/biglietti/saint-chapelle/saverio-buscio.pdf' },
        { name: 'Caterina Alaimo', price: '', pdf: '/biglietti/saint-chapelle/caterina-alaimo.pdf' },
        { name: 'Cristina Fiorenza', price: '', pdf: '/biglietti/saint-chapelle/cristina-fiorenza.pdf' },
        { name: 'Giuseppe Scopelliti', price: '', pdf: '/biglietti/saint-chapelle/giuseppe-scopelliti.pdf' }
      ],
      receipts: [
        { name: 'Ricevuta Acquisto', pdf: '/ricevute/saint-chapelle/ricevuta-acquisto.pdf' }
      ],
      website: 'https://www.sainte-chapelle.fr'
    },
    'notre-dame': {
      description: 'Cattedrale gotica simbolo di Parigi',
      image: '/images/notre-dame.avif',
      tickets: [
        { name: 'Saverio Buscio', price: '', pdf: '/biglietti/notre-dame/saverio-buscio.pdf' },
        { name: 'Caterina Alaimo', price: '', pdf: '/biglietti/notre-dame/caterina-alaimo.pdf' },
        { name: 'Cristina Fiorenza', price: '', pdf: '/biglietti/notre-dame/cristina-fiorenza.pdf' },
        { name: 'Giuseppe Scopelliti', price: '', pdf: '/biglietti/notre-dame/giuseppe-scopelliti.pdf' }
      ],
      receipts: [
        { name: 'Ricevuta Acquisto', pdf: '/ricevute/notre-dame/ricevuta-acquisto.pdf' }
      ],
      website: 'https://www.notredamedeparis.fr'
    },
    'battello-senna': {
      description: 'Crociera panoramica sulla Senna',
      image: '/images/battello-senna.jpg',
      tickets: [
        { name: 'Saverio Buscio', price: '', pdf: '/biglietti/battello-senna/saverio-buscio.pdf' },
        { name: 'Caterina Alaimo', price: '', pdf: '/biglietti/battello-senna/caterina-alaimo.pdf' },
        { name: 'Cristina Fiorenza', price: '', pdf: '/biglietti/battello-senna/cristina-fiorenza.pdf' },
        { name: 'Giuseppe Scopelliti', price: '', pdf: '/biglietti/battello-senna/giuseppe-scopelliti.pdf' }
      ],
      receipts: [
        { name: 'Ricevuta Acquisto', pdf: '/ricevute/battello-senna/ricevuta-acquisto.pdf' }
      ],
      website: 'https://www.bateauxparisiens.com'
    },
    'reggia-versailles': {
      description: 'Palazzo reale e giardini storici',
      image: '/images/reggia-versailles.jpg',
      tickets: [
        { name: 'Saverio Buscio', price: '', pdf: '/biglietti/reggia-versailles/saverio-buscio.pdf' },
        { name: 'Caterina Alaimo', price: '', pdf: '/biglietti/reggia-versailles/caterina-alaimo.pdf' },
        { name: 'Cristina Fiorenza', price: '', pdf: '/biglietti/reggia-versailles/cristina-fiorenza.pdf' },
        { name: 'Giuseppe Scopelliti', price: '', pdf: '/biglietti/reggia-versailles/giuseppe-scopelliti.pdf' }
      ],
      receipts: [
        { name: 'Ricevuta Acquisto', pdf: '/ricevute/reggia-versailles/ricevuta-acquisto.pdf' }
      ],
      website: 'https://www.chateauversailles.fr'
    },
    'opera-paris': {
      description: 'Teatro dell\'opera storico di Parigi',
      image: '/images/opera-paris.jpg',
      tickets: [
        { name: 'Saverio Buscio', price: '', pdf: '/biglietti/opera-paris/saverio-buscio.pdf' },
        { name: 'Caterina Alaimo', price: '', pdf: '/biglietti/opera-paris/caterina-alaimo.pdf' },
        { name: 'Cristina Fiorenza', price: '', pdf: '/biglietti/opera-paris/cristina-fiorenza.pdf' },
        { name: 'Giuseppe Scopelliti', price: '', pdf: '/biglietti/opera-paris/giuseppe-scopelliti.pdf' }
      ],
      receipts: [
        { name: 'Ricevuta Acquisto', pdf: '/ricevute/opera-paris/ricevuta-acquisto.pdf' }
      ],
      website: 'https://www.operadeparis.fr'
    }
  };

  const data = attractionData[attraction.id as keyof typeof attractionData];

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
            {attraction.name}
          </h1>
        </div>

        {/* Immagine di copertina con descrizione per tutte le attrazioni */}
        <div className="mb-8">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-sm">
            <img 
              src={data.image} 
              alt={attraction.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback se l'immagine non esiste
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-center leading-relaxed text-sm">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Biglietti Section */}
        {data.tickets.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
              Biglietti
            </h2>
            <div className="space-y-3">
              {data.tickets.map((ticket, index) => (
                <a
                  key={index}
                  href={ticket.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:bg-gray-50 transition-all duration-200 active:scale-95"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-medium text-gray-900">
                        {ticket.name}
                      </div>
                      {ticket.price && (
                        <div className="text-sm text-gray-500">
                          {ticket.price}
                        </div>
                      )}
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
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Ricevute Section */}
        {data.receipts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
              Ricevute
            </h2>
            <div className="space-y-3">
              {data.receipts.map((receipt, index) => (
                <a
                  key={index}
                  href={receipt.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:bg-gray-50 transition-all duration-200 active:scale-95"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium text-gray-900">
                      {receipt.name}
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
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Altre Informazioni Section per tutte le attrazioni */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
            Altre informazioni
          </h2>
          <div className="space-y-3">
            <a
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:bg-gray-50 transition-all duration-200 active:scale-95"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-900">
                  Sito web
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionPage;
