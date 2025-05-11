import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

const Predictions = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  const regions = [
    'All Regions',
    'Ilocos Region',
    'Cagayan Valley',
    'Central Luzon',
    'CALABARZON',
    'MIMAROPA',
    'Bicol Region',
    'Western Visayas',
    'Central Visayas',
    'Eastern Visayas',
    'Zamboanga Peninsula',
    'Northern Mindanao',
    'Davao Region',
    'SOCCSKSARGEN',
    'Caraga',
    'BARMM'
  ];
  
  const years = ['2023', '2024', '2025', '2026', '2027'];
  
  const predictions = [
    { region: 'Central Luzon', year: '2025', prediction: '3.8M', change: '+5.2%', confidence: 'High' },
    { region: 'Cagayan Valley', year: '2025', prediction: '2.7M', change: '+3.1%', confidence: 'High' },
    { region: 'Western Visayas', year: '2025', prediction: '2.3M', change: '+2.5%', confidence: 'Medium' },
    { region: 'SOCCSKSARGEN', year: '2025', prediction: '1.9M', change: '+4.1%', confidence: 'Medium' },
    { region: 'Ilocos Region', year: '2025', prediction: '1.6M', change: '+1.8%', confidence: 'High' },
    { region: 'Bicol Region', year: '2025', prediction: '1.5M', change: '+2.2%', confidence: 'Medium' },
    { region: 'MIMAROPA', year: '2025', prediction: '1.2M', change: '+0.8%', confidence: 'Low' },
    { region: 'Davao Region', year: '2025', prediction: '1.1M', change: '+3.5%', confidence: 'Medium' },
    { region: 'Northern Mindanao', year: '2025', prediction: '1.0M', change: '+1.2%', confidence: 'Medium' },
    { region: 'Eastern Visayas', year: '2025', prediction: '0.9M', change: '-0.5%', confidence: 'Low' },
  ];
  
  const filteredPredictions = predictions.filter(p => 
    (selectedRegion === 'All Regions' || p.region === selectedRegion) && 
    p.year === selectedYear
  );

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Rice Production Predictions</h1>
        <p className="text-gray-600 max-w-4xl">
          View detailed predictions for rice production across different regions of the Philippines.
          Our AI-powered model analyzes historical data, weather patterns, and agricultural policies
          to provide accurate forecasts.
        </p>
      </section>
      
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-4 animate-slide-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">Production Forecasts</h2>
            
            <button 
              className="flex items-center text-sm font-medium text-green-700 md:hidden"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter size={16} className="mr-1" />
              Filters {filtersOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
            </button>
            
            <div className={`md:flex space-y-2 md:space-y-0 md:space-x-4 ${filtersOpen ? 'block' : 'hidden md:flex'} mt-2 md:mt-0`}>
              <div>
                <label htmlFor="region-select" className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                <select
                  id="region-select"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="year-select" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select
                  id="year-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted Yield (MT)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPredictions.map((prediction, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{prediction.region}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{prediction.prediction}</td>
                    <td className={`px-4 py-3 whitespace-nowrap text-sm ${
                      prediction.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>{prediction.change}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(prediction.confidence)}`}>
                        {prediction.confidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section className="mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Prediction Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-green-700 mb-2">Historical Data Analysis</h3>
              <p className="text-gray-600 text-sm">
                Our model analyzes over 20 years of historical production data across all regions,
                identifying patterns and trends that influence future yields.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-green-700 mb-2">Climate Factors</h3>
              <p className="text-gray-600 text-sm">
                Weather patterns, rainfall predictions, and climate change indicators are incorporated
                to adjust forecasts based on expected growing conditions.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-green-700 mb-2">Agricultural Inputs</h3>
              <p className="text-gray-600 text-sm">
                Data on fertilizer use, irrigation coverage, seed quality, and farming technology adoption
                rates help refine regional predictions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="animate-fade-in" style={{animationDelay: '0.3s'}}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Request Custom Prediction</h2>
          <p className="text-gray-600 mb-4">
            Need a more specific prediction for your area? Submit a request for a detailed forecast
            tailored to your specific location and requirements.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Request Custom Forecast
          </button>
        </div>
      </section>
    </div>
  );
};

export default Predictions;