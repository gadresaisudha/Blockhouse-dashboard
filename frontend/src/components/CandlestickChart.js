import { Chart as ChartJS, Title, Tooltip, Legend, TimeScale, LinearScale,BarElement } from 'chart.js';
import { CandlestickElement, CandlestickController } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; 


ChartJS.register(
  CandlestickElement,
  CandlestickController,
  TimeScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);


const CandlestickChart = ({ data }) => {
  const chartData = {

    datasets: [{
      label: 'Candlestick Data',
      data: data.candle_data.map(d => ({
        x: new Date(d.x),
        o: d.o,
        h: d.h,
        l: d.l,
        c: d.c
      })),
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
      
    }]
    
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            if (context.parsed.y !== null) {
              return `${label}: ${context.parsed.y}`;
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'time', // Set the x-axis type to time
        time: {
          unit: 'day' // Format dates to show day
        }
      },
      y: {
        beginAtZero: true
      }
    }
  };
  

  

  return <Chart type="candlestick" data={chartData} options={options}/>;
}

export default CandlestickChart;