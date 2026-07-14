import { http, HttpResponse } from 'msw'
import { mockWeatherData } from './fixtures/weather';
import { API_CONFIG } from '../lib/api/config';

export const weatherHandlers = {
  success: http.get(`${API_CONFIG.BASE_URL}/weather`, ({ request }) => {
    const  url = new URL(request.url);
    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");
    console.log(`Received request for weather with lat: ${lat}, lon: ${lon}`);
    if(!lat || !lon) {
      return HttpResponse.json({ message: "Missing lat or lon parameters" }, { status: 400 });
    }
    return HttpResponse.json(mockWeatherData);
  }),

  failure: http.get(`${API_CONFIG.BASE_URL}/weather`, () => {
    return HttpResponse.json(
      { message: "Failed to fetch weather" },
      { status: 500 }
    );
  }),
};