import {http, HttpResponse} from 'msw';
import { mockLocationData } from './fixtures/location';


export const locationHandlers = {
  success: http.get("/direct", ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");
    console.log(`Received request for location search with query: ${query}`);
    if (!query) {
      return HttpResponse.json({ message: "Missing query parameter" }, { status: 400 });
    }
    // You can return a mock location search response here
    return HttpResponse.json(mockLocationData);
  } ),
  failure: http.get("/direct", () => {
    return HttpResponse.json(
      { message: "Failed to fetch location data" },
      { status: 500 }
    );
  })
}