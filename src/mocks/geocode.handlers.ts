import { http, HttpResponse } from 'msw'
import { mockGeocodeData } from './fixtures/geocode';

export const geocodeHandlers = {
  success: http.get("/reverse", ({ request }) => {
    const url = new URL(request.url);
    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");
    console.log(`Received request for geocode with lat: ${lat}, lon: ${lon}`);
    if (!lat || !lon) {
      return HttpResponse.json({ message: "Missing lat or lon parameters" }, { status: 400 });
    }
    // You can return a mock geocode response here
    return HttpResponse.json(mockGeocodeData);
  }),

  failure: http.get("/reverse", () => {
    return HttpResponse.json(
      { message: "Failed to fetch geocode" },
      { status: 500 }
    );
  })
};