'use client';
import { useEffect, useState } from 'react';
import { fetchBarChartData } from '@/api/BarChart';
import BarChart from '@/components/BarChart';

const BarChartPage = () => {
    const [barChartData, setBarChartData] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        const data = await fetchBarChartData(); // Make sure fetchLineChartData is asynchronous and returns data
        setBarChartData(data);
      };
  
      getData(); // Fetch the data on component mount
    }, []);
  if (!barChartData) return <p>Loading...</p>;

  return (
    <main>
      <h1>BarChart</h1>
      <BarChart data={barChartData}/>
    </main>
  );
}
export default BarChartPage;
