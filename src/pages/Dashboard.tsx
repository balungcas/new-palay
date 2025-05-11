import React from 'react';
import { BarChart, ArrowUp, ArrowDown, CloudRain, Leaf, Scale, ShoppingCart } from 'lucide-react';
import LineChart from '../components/charts/LineChart';
import RegionalMap from '../components/RegionalMap';
import StatCard from '../components/StatCard';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
            Philippines Rice Production Forecast
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of rice production, consumption, and trade data from USDA reports.
            Make informed decisions with our latest agricultural insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
          <StatCard 
            title="2023/24 Production" 
            value="12.4" 
            unit="MMT"
            change="-0.8%"
            trend="down"
            icon={<BarChart className="h-10 w-10 text-blue-500" />}
          />
          <StatCard 
            title="Milled Rice" 
            value="7.8" 
            unit="MMT"
            change="-0.6%"
            trend="down"
            icon={<Scale className="h-10 w-10 text-green-500" />}
          />
          <StatCard 
            title="Consumption" 
            value="15.0" 
            unit="MMT"
            change="+1.4%"
            trend="up"
            icon={<ShoppingCart className="h-10 w-10 text-amber-500" />}
          />
          <StatCard 
            title="Area Harvested" 
            value="4.54" 
            unit="M hectares"
            change="-0.2%"
            trend="down"
            icon={<Leaf className="h-10 w-10 text-emerald-500" />}
          />
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-slide-up">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Production Trends (2019-2024)
            </h2>
            <div className="chart-container">
              <LineChart />
            </div>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Regional Production Map
            </h2>
            <div className="region-map-container">
              <RegionalMap />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Latest USDA Insights
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-medium text-gray-800">Production Outlook</h3>
              <p className="text-gray-600">Rice production for MY 2023/24 is forecast at 12.4 million MT, slightly lower than the previous year due to weather-related challenges and reduced planted area.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-medium text-gray-800">Consumption Patterns</h3>
              <p className="text-gray-600">Rice consumption is expected to reach 15.0 million MT in MY 2023/24, continuing an upward trend driven by population growth and steady per capita consumption.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-medium text-gray-800">Trade Analysis</h3>
              <p className="text-gray-600">The Philippines remains a significant rice importer, with imports helping to meet the gap between domestic production and consumption needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;