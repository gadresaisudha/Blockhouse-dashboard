'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Pie Chart Data',
      data: data.values,
      borderColor: [
        "#3cba9f",
        "#ffa500",
        "#c45850",
    ],
    backgroundColor: [
      'rgb(255, 0, 0)',
      'rgb(0, 255, 0)',
      'rgb(0, 0, 255)'
    ],
      borderWidth: 1
    }]
  };

  return <Pie data={chartData} />;
}