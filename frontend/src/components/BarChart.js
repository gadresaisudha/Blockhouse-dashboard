import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function BarChart({ data }) {
  const chartData = {
    labels:data.labels,
    datasets: [{
      label: 'Bar Chart Data',
      data: data.values,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return <Bar data={chartData} />;
}