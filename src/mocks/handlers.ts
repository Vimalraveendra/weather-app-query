import { forecastHandlers } from "./forecast.handlers";
import { geocodeHandlers } from "./geocode.handlers";
import { locationHandlers } from "./location.handlers";
import { weatherHandlers } from "./weather.handlers";


export const handlers = [
  weatherHandlers.success,
  forecastHandlers.success,
  geocodeHandlers.success,
  locationHandlers.success,
];