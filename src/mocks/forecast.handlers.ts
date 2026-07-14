import { http, HttpResponse } from 'msw'
import { mockForecastData } from './fixtures/forecast';
import { API_CONFIG } from '../lib/api/config';


export const forecastHandlers = {
  success: http.get(`${API_CONFIG.BASE_URL}/forecast`, ({ request }) => {
    const url = new URL(request.url);
    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");
    console.log(`Received request for forecast with lat: ${lat}, lon: ${lon}`);
    if (!lat || !lon) {
      return HttpResponse.json({ message: "Missing lat or lon parameters" }, { status: 400 });
    }
    // You can return a mock forecast response here
    return HttpResponse.json(mockForecastData);
  }),

  failure: http.get(`${API_CONFIG.BASE_URL}/forecast`, () => {
    return HttpResponse.json(
      { message: "Failed to fetch forecast" },
      { status: 500 }
      );
   })
}