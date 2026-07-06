import { Card,CardContent,CardHeader, CardTitle } from "../../../components/ui/card"
import type { WeatherData } from "../types/weather.types"
import { createWeatherDetails } from "../utils/weather-details"
import WeatherDetailCard from "./WeatherDetailCard"

type WeatherDetailsProps={
    data:WeatherData
}

const WeatherDetails = ({data}:WeatherDetailsProps) => {
    const {wind:{deg},main:{pressure},sys:{sunrise,sunset},visibility,dt} =data
    const weather ={sunrise,sunset,deg,pressure,visibility,dt}
    const weatherDetails=createWeatherDetails(weather);
  return (
            <Card className="flex-1 p-6 border border-indigo-500/60">
                <CardHeader  className="text-center">   
                    <CardTitle>Weather Details</CardTitle>
                </CardHeader>
                <CardContent>
                      <div className="grid gap-6  sm:grid-cols-2 mt-3">
                          {
                             weatherDetails.map((detail)=><WeatherDetailCard key={detail.label} detail={detail}/>)
                          }
                      </div>
                </CardContent>
        </Card>

  )
}

export default WeatherDetails