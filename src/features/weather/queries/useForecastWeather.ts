import { useQuery } from "@tanstack/react-query"
import type { Coordinates } from "../../../types/global.types"
import { getForecastWeather } from "../api/weatherApi"



export const useForecastWeatherQuery =(coordinates:Coordinates|null)=>{
    return useQuery({
        queryKey:['forecast',coordinates?.lat,coordinates?.lon],
        queryFn:()=>getForecastWeather(coordinates!),
        enabled:!!coordinates
    })
}