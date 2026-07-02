import {  Droplets, MapPin, Wind } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"
import type { WeatherData } from "../types/weather.types"
import { formatTemp } from "../utils/temp";
import type { SearchHistoryItem } from "../../../types/global.types"
import type { GeocodeData } from "../../location/types/location.types";

type CurrentWeatherProps={
    data:WeatherData,
    location?:GeocodeData| SearchHistoryItem
}

const CurrentWeatherCard = ({data,location}:CurrentWeatherProps) => {
  const {
    weather:[currentWeather],
    main:{temp,feels_like,temp_max,temp_min,humidity,},
    wind:{speed},
    }= data;
  
  return (
            <Card className="overflow-hidden flex-none md:flex-2">
                <CardContent className="p-6">
                     <div className="grid gap-6 md:grid-cols-2">
                           <div className="space-y-6">
                                <div className="space-y-2">
                                     <div className="flex items-baseline gap-1">
                                          <MapPin className="h-5 w-5 text-muted-foreground"/>
                                          <h2 className="text-4xl font-bold tracking-tighter">{location?.name}</h2>
                                         <p className="text-md text-muted-foreground">, {location?.country}</p> 
                                     </div>
                                  
                                </div>
                                <div className="flex items-center gap-4">
                                      <p className="text-5xl font-bold tracking-tighter">{formatTemp(temp)}</p>
                                      <div className="space-y-1">
                                       <p className="text-sm font-medium text-muted-foreground">Feels like {formatTemp(feels_like)}</p>
                                       <div className="flex gap-2 text-sm font-medium">
                                           <span className="flex  items-center gap-1 text-blue-500">
                                               L:{formatTemp(temp_min)}
                                           </span>
                                              <span className="flex  items-center gap-1 text-red-500">
                                               H:{formatTemp(temp_max)}
                                           </span>
                                       </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                      <div className="flex items-center gap-2">
                                         <Droplets className="h-4 w-4 text-blue-500"/>
                                         <div className="space-y-0.5">
                                             <p className="text-sm font-medium">Humidity</p>
                                             <p className="text-sm text-muted-foreground">{humidity}%</p>
                                         </div>
                                      </div>
                                       <div className="flex items-center gap-2">
                                         <Wind className="h-4 w-4 text-blue-500"/>
                                         <div className="space-y-0.5">
                                             <p className="text-sm font-medium">Wind Speed</p>
                                             <p className="text-sm text-muted-foreground">{speed} m/s</p>
                                         </div>
                                      </div>
                                </div>
                           </div>
                              <div className="flex flex-col items-center justify-center">
                                <div className="relative flex aspect-square w-full max-w-[180px] items-center justify-center">
                                      <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`} 
                                      alt={currentWeather.description} 
                                      className="h-full w-full object-contain"
                                      />
                                      <div className="absolute bottom-0 text-center">
                                         <p className="text-sm font-medium capitalize">{currentWeather.description}</p>
                                      </div>
                                </div>
                        </div>
                     </div>
                  
                </CardContent>
            </Card>
        )
}

export default CurrentWeatherCard