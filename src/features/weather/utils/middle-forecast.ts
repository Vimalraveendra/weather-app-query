import type { Forecast } from "../types/weather.types";

export const getMiddleForecast=(items:Forecast[])=>{
return items[Math.floor(items.length / 2)];
}