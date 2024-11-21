'use client';
import { useEffect, useState } from 'react';
import { fetchPieChartData } from '@/api/PieChart';
import PieChart from '@/components/PieChart';

const PieChartPage = () => {
    const [pieChartData, setPieChartData] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        const data = await fetchPieChartData(); // Make sure fetchLineChartData is asynchronous and returns data
        setPieChartData(data);
      };
  
      getData(); // Fetch the data on component mount
    }, []);
  if (!pieChartData) return <p>Loading...</p>;

  return (
    <main>
      <h1>PieChart</h1>
      <PieChart data={pieChartData}  width={400} height={400}/>
    </main>
  );
}
export default PieChartPage;
