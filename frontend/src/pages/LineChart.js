'use client';
import { useEffect, useState } from 'react';
import { fetchLineChartData } from '@/api/LineChart';
import LineChart from '../components/LineChart';

const LineChartPage = () => {
    const [lineChartData, setLineChartData] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        const data = await fetchLineChartData(); // Make sure fetchLineChartData is asynchronous and returns data
        setLineChartData(data);
      };
  
      getData(); // Fetch the data on component mount
    }, []);
  if (!lineChartData) return <p>Loading...</p>;

  return (
    <main>
      <h1>LineChart</h1>
      <LineChart data={lineChartData} />
    </main>
  );
}
export default LineChartPage;
