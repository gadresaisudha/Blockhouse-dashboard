'use client';
import { useEffect, useState } from 'react';
import { fetchCandleStickChartData } from '@/api/CandleStick';
import CandlestickChart from '@/components/CandlestickChart';

const CandleStickChartPage = () => {
    const [candleStickChartData, setCandleStickChartData] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        const data = await fetchCandleStickChartData() // Make sure fetchLineChartData is asynchronous and returns data
        setCandleStickChartData(data);
      };
  
      getData(); // Fetch the data on component mount
    }, []);
  if (!candleStickChartData) return <p>Loading...</p>;

  return (
    <main>
      <h1>CandleStickChart</h1>
      <CandlestickChart data={candleStickChartData}/>
    </main>
  );
}
export default CandleStickChartPage;
