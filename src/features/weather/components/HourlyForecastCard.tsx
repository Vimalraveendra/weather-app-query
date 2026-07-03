import { Card, CardContent } from "../../../components/ui/card";
import type { HourlyForecast } from "../types/weather.types"
import {format} from "date-fns"
import { formatTemp } from "../utils/temp";

type HourlyForecastCardProps={
    hour:HourlyForecast
}

export const HourlyForecastCard = ({hour}:HourlyForecastCardProps) => {
  return (
        <Card className={"flex-[0_0_auto]  p-4  w-24 rounded-xl shadow border border-blue-600/50 "}>
            <CardContent>
              <div className="w-full flex gap-2 items-center justify-center flex-col">
                  <p>{format(new Date(hour.dt*1000),"ha")}</p>
                  <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt={hour.weather[0].description} />
                  <p>{formatTemp(hour.main.temp)}</p>
              </div>
            </CardContent>    
      </Card>
  )
}
