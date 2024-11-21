const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchCandleStickChartData(req, res) {
    try {
      console.log(`${API_BASE_URL}/candlestick-chart-data/`)
      const response = await fetch(`${API_BASE_URL}/candlestick-chart-data/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }