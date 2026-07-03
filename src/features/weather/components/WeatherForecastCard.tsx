
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react"
import type { Forecast } from "../types/weather.types"
import { formatDay } from "../utils/day"
import { formatTemp } from "../utils/temp"
type WeatherForecastCardProps={
    forecast:Forecast
}

const WeatherForecastCard = ({forecast}:WeatherForecastCardProps) => {
    const {dt,weather,temp_min,temp_max,humidity,wind} =forecast
    return (
                      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 rounded-lg border p-4 ">
                          <div>
                                <p className="font-medium">{formatDay(dt)}</p>
                                <p className="text-sm text-muted-foreground capitalize">{weather.description}</p>
                          </div>
                          <div className="flex md:justify-center  gap-2">
                              <span className="flex items-center text-blue-500">
                                <ArrowDown className=" h-4 w-4"/>
                                {formatTemp(temp_min)}
                              </span>
                              <span className="flex items-center text-red-500">
                                <ArrowUp className=" h-4 w-4"/>
                                  {formatTemp(temp_max)}
                              </span>
                          </div>
                          <div className="flex md:justify-end gap-3">
                              <span className="flex items-center gap-2">
                                <Droplets className=" h-4 w-4 text-blue-500"/>
                                {humidity}%
                              </span>
                              <span className="flex items-center gap-2 ">
                                <Wind className=" h-4 w-4 text-blue-500"/>
                                  {wind}m/s
                              </span>
                          </div>
                      </div>
                 )
   }

export default WeatherForecastCard