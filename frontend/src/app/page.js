
import BarChartPage from "@/pages/BarChart";
import CandleStickChartPage from "@/pages/Candlestick";
import LineChartPage from "@/pages/LineChart";
import PieChartPage from "@/pages/PieChart";
export default function Dashboard() {
    return (
 

<main className="p-8">
<h1 className="text-2xl font-bold mb-6">Dashboard</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
  <div className="bg-white p-4 shadow rounded">
    <CandleStickChartPage/>
  </div>
  <div className="bg-white p-4 shadow rounded">
    <LineChartPage/>
  </div>
  <div className="bg-white p-4 shadow rounded">
    <BarChartPage/>
  </div>
  <div className="bg-white p-4 shadow rounded">
    <PieChartPage/>
  </div>
</div>
</main>
    );
  }