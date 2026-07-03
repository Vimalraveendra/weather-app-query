import type { HourlyForecast } from "../types/weather.types";
import { formatYear } from "./year";

import type { Forecast } from "../types/weather.types";
import { getMiddleForecast } from "./middle-forecast";

export const formatDailyForecast = (map: Map<string, Forecast[]>) => {
  return Array.from(map.entries()).map(([date, items]) => {
    const  middle = getMiddleForecast(items)
    return {
      date,
      temp_min: Math.min(...items.map(i => i.temp_min)),
      temp_max: Math.max(...items.map(i => i.temp_max)),
      weather: middle.weather,
      humidity:middle.humidity,
      wind:middle.wind,
      dt:middle.dt
    };
  });
};
export const getDailyForecast = (forecastList: HourlyForecast[]) => {
    const map= new Map<string,Forecast[]>();
    forecastList.forEach( (forecast)=>{
    const {main:{temp_min,temp_max,humidity},wind:{speed},weather:[weather],dt} =forecast
      const date = formatYear(dt);
    const formattedForecast ={date,temp_min,temp_max,humidity,wind:speed,weather,dt}
        if(!map.has(date)){
            map.set(date,[])
        }
        map.get(date)!.push(formattedForecast)
    })
    return formatDailyForecast(map)
};