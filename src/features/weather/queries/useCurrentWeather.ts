import { useQuery } from "@tanstack/react-query"
import type { Coordinates } from "../../../types/global.types"
import { getCurrentWeather } from "../api/weatherApi"


export const useCurrentWeatherQuery=(coordinates:Coordinates|null)=>{
    return useQuery({
           queryKey:['weather',coordinates?.lat,coordinates?.lon],
           queryFn:()=>getCurrentWeather(coordinates!),
           enabled:!!coordinates
        })
    }
