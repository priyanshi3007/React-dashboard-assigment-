// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartContainer from './ChartContainer';
import AlertsOverTimeChart from './AlertsOverTimeChart';
import TopSourceIPsChart from './TopSourceIPsChart';
import TopDestinationIPsChart from './TopDestinationIPsChart';
import AlertTypeDistributionChart from './AlertTypeDistributionChart';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/eve.json')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (data.length === 0) return <div>Loading...</div>;

  const timeSeriesData = data.map((item, index) => ({
    timestamp: new Date(item.timestamp).toLocaleString(),
    count: index + 1,
  }));

  const topSourceIPsData = Object.entries(data.reduce((acc, item) => {
    acc[item.src_ip] = (acc[item.src_ip] || 0) + 1;
    return acc;
  }, {})).map(([src_ip, count]) => ({ src_ip, count })).slice(0, 10);

  const topDestIPsData = Object.entries(data.reduce((acc, item) => {
    acc[item.dest_ip] = (acc[item.dest_ip] || 0) + 1;
    return acc;
  }, {})).map(([dest_ip, count]) => ({ dest_ip, count })).slice(0, 10);

  const alertTypeCountsData = Object.entries(data.reduce((acc, item) => {
    const category = item.alert?.category || 'Unknown';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {})).map(([category, count]) => ({ category, count }));

  return (
    <div className="dashboard-container">
      <ChartContainer title="Alerts Over Time">
        <AlertsOverTimeChart data={timeSeriesData} />
      </ChartContainer>
      <ChartContainer title="Top Source IPs">
        <TopSourceIPsChart data={topSourceIPsData} />
      </ChartContainer>
      <ChartContainer title="Top Destination IPs">
        <TopDestinationIPsChart data={topDestIPsData} />
      </ChartContainer>
      <ChartContainer title="Alert Type Distribution">
        <AlertTypeDistributionChart data={alertTypeCountsData} />
      </ChartContainer>
    </div>
  );
};

export default Dashboard;
