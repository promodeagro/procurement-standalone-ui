import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'January', value: 400 },
  { month: 'February', value: 300 },
  { month: 'March', value: 500 },
  { month: 'April', value: 200 },
  { month: 'May', value: 700 },
  { month: 'June', value: 600 },
  { month: 'July', value: 300 },
  { month: 'August', value: 500 },
  { month: 'September', value: 400 },
  { month: 'October', value: 600 },
  { month: 'November', value: 300 },
  { month: 'December', value: 500 },
];

const SimpleBarChart = () => {
  return (    
    <ResponsiveContainer width="100%" height={330}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[100, 700]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
 
