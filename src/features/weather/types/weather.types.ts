import type { LucideIcon } from "lucide-react"
import type { Coordinates } from "../../../types/global.types"

export interface Weather{
      id:number,
      main: string,
      description: string,
      icon: string
}
export interface MainTemp{
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity:number,
    sea_level: number,
    grnd_level: number
}
export interface WeatherData{

  coord:Coordinates,
   weather:Weather[] ,
  base:string,
  main: MainTemp,
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
 clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export interface HourlyForecast{
      dt: number,
      main:WeatherData['main'],
      weather:WeatherData['weather'],
      wind:WeatherData['wind'],
     dt_txt: string
}

  export interface ForecastData{
    list:Array<HourlyForecast>
  name: string,
  country: string,
  sunrise: number,
  sunset: number
  }
  export interface WeatherDetail{
  label:string,
  icon:LucideIcon,
  value:number|string
  color:string,
  }
export type Forecast = {
 date:string,
  temp_min: number;
  temp_max:number,
  humidity: number,
  wind:number,
  weather:Weather,
  dt:number
};