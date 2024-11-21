'use client';
import { Chart as ChartJS, LineElement, PointElement,CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement,CategoryScale,PointElement,LinearScale,Title,Tooltip,Legend)

export default function LineChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Line Chart Data',
      data: data.values,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return <Line data={chartData} />;
}