// src/components/AlertTypeDistributionChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const AlertTypeDistributionChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#333' }} />
      <Pie
        data={data}
        dataKey="count"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#4ecca3"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={["#4ecca3", "#f96b6b", "#f3a712"][index % 3]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default AlertTypeDistributionChart;
