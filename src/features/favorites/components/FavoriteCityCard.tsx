import { useNavigate } from "react-router-dom"
import type { MouseEvent } from 'react'
import { Card, CardContent, CardHeader } from "../../../components/ui/card"
import type { FavoriteCity } from "../types/favorites.types"
import { Button } from "../../../components/ui/button"
import { Loader2, Wind, X } from "lucide-react"
import { toast } from "sonner"
import { useCurrentWeatherQuery } from "../../weather/queries/useCurrentWeather"
import { formatTemp } from "../../weather/utils/temp"

type FavoriteCityCardProps={
    favorite:FavoriteCity,
    onRemoveFavorite:(id:string)=>void
}


export const FavoriteCityCard = ({favorite,onRemoveFavorite}:FavoriteCityCardProps) => {
    const {id,name,country,lat,lon} = favorite;
    const {isLoading,data:weather} = useCurrentWeatherQuery({lat,lon})
    const navigate = useNavigate();
    const handleNavigateToCity= ()=>{
        navigate(`/city/${name}?lat=${lat}&lon=${lon}`)
    }
    const handleRemoveFavorite=(e: MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation()
         onRemoveFavorite(id)
        toast.error(`Removed ${name} from favorites`);
    }
    if(isLoading) return(
         <div className="flex items-center justify-center h-8">
          <Loader2 className="h-5 w-5 animate-spin"/>
         </div>
    )
  return (
      <>
        {
            weather && (
                <Card className="flex-1 p-2 hover:shadow-md transition-shadow cursor-pointer" onClick={handleNavigateToCity}>
                        <CardHeader  className="flex justify-end mb-3">
                            <Button variant={"ghost"} size={"icon"} onClick={handleRemoveFavorite}><X/> </Button>
                        </CardHeader>
                        <CardContent className="flex justify-between p-2">
                            <div className="space-y-2 ">
                                <p className="text-3xl">{name}
                                <span className="text-sm text-muted-foreground">
                                , {country}
                                </span>
                            </p>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                                            alt={weather.weather[0].description} 
                                            className="object-contain h-12 w-12 "
                                />
                                <p className="text-sm font-medium capitalize">{weather.weather[0].description}</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-5xl font-bold tracking-tighter">{formatTemp(weather.main.temp)}</p>
                                <div className="flex gap-2 text-sm font-medium">
                                    <span className="flex  items-center gap-1 text-blue-500">
                                        L:{formatTemp(weather.main.temp_min)}
                                    </span>
                                        <span className="flex  items-center gap-1 text-red-500">
                                        H:{formatTemp(weather.main.temp_max)}
                                    </span>
                                </div>
                
                                <div className="flex gap-1">
                                    <Wind className="h-4 w-4 text-blue-500"/> 
                                <p className="text-sm text-muted-foreground">{weather.wind.speed} m/s</p>
                                </div>
                            
                            </div>
                        </CardContent>
                </Card>
                    )
        }
      </>
       
  )
}