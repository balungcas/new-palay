import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DataPoint {
  year: string;
  production: number;
  milled: number;
  consumption: number;
}

const data: DataPoint[] = [
  { year: '2019/20', production: 11.927, milled: 7.620, consumption: 14.300 },
  { year: '2020/21', production: 12.416, milled: 7.800, consumption: 14.450 },
  { year: '2021/22', production: 12.812, milled: 8.100, consumption: 14.600 },
  { year: '2022/23', production: 12.500, milled: 7.850, consumption: 14.800 },
  { year: '2023/24', production: 12.400, milled: 7.800, consumption: 15.000 }
];

const LineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="production" 
          name="Production (MMT)"
          stroke="#059669" 
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="milled" 
          name="Milled Rice (MMT)"
          stroke="#0284c7" 
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="consumption" 
          name="Consumption (MMT)"
          stroke="#dc2626" 
          strokeWidth={2}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;