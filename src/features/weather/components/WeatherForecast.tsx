import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import type { ForecastData } from "../types/weather.types";
import { getDailyForecast } from "../utils/daily-forecast";
import WeatherForecastCard from "./WeatherForecastCard";

type WeatherForecastProps = {
  data:ForecastData
};

export const WeatherForecast = ({data}:WeatherForecastProps) => {
  const dailyForecasts = getDailyForecast(data.list)
  return (
       <Card className="flex-1 p-4">
                <CardHeader className="p-2">
                    <CardTitle className="text-lg">5-Day Forecast</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {
                    dailyForecasts.map((forecast)=><WeatherForecastCard key = {forecast.date} forecast={forecast}/>)
                    }
               </CardContent>
        </Card>
  )
}