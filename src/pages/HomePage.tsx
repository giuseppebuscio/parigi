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

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
            Viaggio a Parigi
          </h1>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
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
                <span className="text-lg font-medium text-gray-900 text-left">
                  {attraction.name}
                </span>
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

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Scopri le meraviglie di Parigi
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
