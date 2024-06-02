// src/components/TopSourceIPsChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TopSourceIPsChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="src_ip" stroke="#ffffff" />
      <YAxis stroke="#ffffff" />
      <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#333' }} />
      <Bar dataKey="count" fill="#f3a712" />
    </BarChart>
  </ResponsiveContainer>
);

export default TopSourceIPsChart;
