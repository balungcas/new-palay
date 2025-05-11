import React, { useState } from 'react';
import { Calendar, Filter, Download, Upload } from 'lucide-react';
import FileUpload from '../components/FileUpload';

const HistoricalData = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2019-2024');
  const [selectedMetric, setSelectedMetric] = useState('Production Volume');
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedData, setUploadedData] = useState<any[]>([]);
  
  const periods = ['2019-2024', '2014-2019', 'All Time'];
  const metrics = ['Production Volume', 'Area Harvested', 'Yield per Hectare'];
  
  const historicalData = [
    { 
      year: '2023/24',
      production: '12.4M',
      area: '4.54M',
      yield: '2.73',
      milled: '7.8M',
      imports: '3.8M'
    },
    { 
      year: '2022/23',
      production: '12.5M',
      area: '4.55M',
      yield: '2.75',
      milled: '7.85M',
      imports: '3.4M'
    },
    { 
      year: '2021/22',
      production: '12.8M',
      area: '4.62M',
      yield: '2.77',
      milled: '8.1M',
      imports: '3.0M'
    },
    { 
      year: '2020/21',
      production: '12.4M',
      area: '4.53M',
      yield: '2.74',
      milled: '7.8M',
      imports: '2.95M'
    },
    { 
      year: '2019/20',
      production: '11.9M',
      area: '4.48M',
      yield: '2.66',
      milled: '7.62M',
      imports: '2.8M'
    }
  ];
  
  const filteredData = historicalData.filter(d => {
    if (selectedPeriod === '2019-2024') {
      return true; // Show all recent data
    }
    return false; // For simplicity, only showing recent data
  });

  const handleDataUpload = (data: any[]) => {
    setUploadedData(data);
    // Here you would typically send this data to your backend
    console.log('Uploaded data:', data);
  };

  const handleDownload = () => {
    const csvContent = [
      ['Marketing Year', 'Production (MT)', 'Area Harvested (ha)', 'Yield (MT/ha)', 'Milled Rice (MT)', 'Imports (MT)'],
      ...filteredData.map(row => [
        row.year,
        row.production,
        row.area,
        row.yield,
        row.milled,
        row.imports
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rice-production-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Historical Rice Production Data</h1>
        <p className="text-gray-600 max-w-4xl">
          Comprehensive historical data from USDA reports on rice production, consumption, and trade
          in the Philippines. This data forms the foundation for our forecasting models.
        </p>
      </section>
      
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 animate-slide-up">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-green-600" />
              USDA Historical Records
            </h2>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <div>
                <label htmlFor="period-select" className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                <select
                  id="period-select"
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {periods.map(period => (
                    <option key={period} value={period}>{period}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="metric-select" className="block text-sm font-medium text-gray-700 mb-1">Metric</label>
                <select
                  id="metric-select"
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {metrics.map(metric => (
                    <option key={metric} value={metric}>{metric}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marketing Year</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Production (MT)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area Harvested (ha)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yield (MT/ha)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Milled Rice (MT)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imports (MT)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((data, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{data.year}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.production}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.area}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.yield}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.milled}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{data.imports}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => setShowUpload(!showUpload)}
              className="flex items-center text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
            >
              <Upload size={16} className="mr-1" />
              Upload Data
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
            >
              <Download size={16} className="mr-1" />
              Download Data
            </button>
          </div>

          {showUpload && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Upload Agricultural Data</h3>
              <FileUpload onUpload={handleDataUpload} />
            </div>
          )}
        </div>
      </section>
      
      <section className="animate-fade-in" style={{animationDelay: '0.4s'}}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Data Sources & Methodology</h2>
          <p className="text-gray-600 mb-4">
            Our data is sourced from official USDA GAINS reports and the Foreign Agricultural Service database.
            You can also upload your own agricultural data in CSV format for analysis.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Production data includes both irrigated and rain-fed rice cultivation</li>
            <li>Area harvested represents total rice cultivation area</li>
            <li>Yield calculations are based on actual harvested production</li>
            <li>Import/export data includes both government and private sector trade</li>
            <li>Consumption estimates include both food and non-food usage</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: March 2024. Data is verified against official USDA reports.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HistoricalData;