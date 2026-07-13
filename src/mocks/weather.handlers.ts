import { http, HttpResponse } from 'msw'
import { mockWeatherData } from './fixtures/weather';

export const weatherHandlers = {
  success: http.get("/current", ({ request }) => {
    const  url = new URL(request.url);
    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");
    console.log(`Received request for weather with lat: ${lat}, lon: ${lon}`);
    if(!lat || !lon) {
      return HttpResponse.json({ message: "Missing lat or lon parameters" }, { status: 400 });
    }
    return HttpResponse.json(mockWeatherData);
  }),

  failure: http.get("/current", () => {
    return HttpResponse.json(
      { message: "Failed to fetch weather" },
      { status: 500 }
    );
  }),
};