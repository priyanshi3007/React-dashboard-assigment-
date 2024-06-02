// src/components/AlertsOverTimeChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AlertsOverTimeChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="timestamp" stroke="#ffffff" />
      <YAxis stroke="#ffffff" />
      <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#333' }} />
      <Line type="monotone" dataKey="count" stroke="#4ecca3" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export default AlertsOverTimeChart;
