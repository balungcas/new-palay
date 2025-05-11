import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const StatCard = ({ title, value, unit, change, trend, icon }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="bg-gray-100 rounded-full p-2">{icon}</div>
      </div>
      <div className="mb-1">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm text-gray-500 ml-1">{unit}</span>
      </div>
      <div className={`flex items-center ${
        trend === 'up' ? 'text-green-600' : 'text-red-600'
      }`}>
        {trend === 'up' ? (
          <ArrowUp size={16} className="mr-1" />
        ) : (
          <ArrowDown size={16} className="mr-1" />
        )}
        <span className="text-sm font-medium">{change}</span>
      </div>
    </div>
  );
};

export default StatCard;