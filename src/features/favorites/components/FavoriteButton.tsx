import { Heart } from "lucide-react";
import { Button } from "../../../components/ui/button";
import type { WeatherData } from "../../weather/types/weather.types"
import { useFavorites } from "../hooks/useFavorites";
import { toast } from "sonner";

type FavoriteButtonProps={
    data:WeatherData;
  
}

export const FavoriteButton = ({data}:FavoriteButtonProps) => {
    const {addToFavorites,removeFavorite,isFavorite} = useFavorites();
    const isFavoriteCity= isFavorite(data.coord);
 
    const handleToggleFavorite=()=>{
         const {coord:{lat,lon},name,sys:{country}} =data;
      if(isFavoriteCity){
          removeFavorite(`${name}-${lat}-${lon}`);
          toast.error(`Removed ${name} from favorites`)
      }else{
         addToFavorites({
           name,
           lat,
           lon,
           country
         })
         toast.success(`Added ${data.name} to favorites`)
      }
    }
  return (
     <Button
        variant={isFavoriteCity ? "default":"outline"}
        size={"icon"}
        onClick={handleToggleFavorite} 
        className={isFavoriteCity?"bg-red-500 hover:bg-red-600":""}
     >
        <Heart className={`size-5 ${isFavoriteCity?"fill-current":""}`}/>
    </Button>
  )
}