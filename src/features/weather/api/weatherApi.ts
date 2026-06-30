import { createUrl } from "../../../lib/api/client";
import { API_CONFIG } from "../../../lib/api/config";
import { fetchData } from "../../../lib/api/request";
import type { Coordinates } from "../../../types/global.types";
import type { ForecastData, WeatherData } from "../types/weather.types";


export const getCurrentWeather =({lat,lon}:Coordinates):Promise<WeatherData>=>{
 const url = createUrl(`${API_CONFIG.BASE_URL}/weather`,{
    lat:lat.toString(),
    lon:lon.toString(),
    units:API_CONFIG.DEFAULT_PARAMS.units
 })
     return  fetchData<WeatherData>(url);
}

export const getForecastWeather=({lat,lon}:Coordinates):Promise<ForecastData>=>{
  const url = createUrl(`${API_CONFIG.BASE_URL}/forecast`,{
     lat:lat.toString(),
    lon:lon.toString(),
    units:API_CONFIG.DEFAULT_PARAMS.units
  })
  return fetchData<ForecastData>(url)
}