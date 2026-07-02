import {  List, RefreshCcw } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { useGeoLocation } from "../../../hooks/useGeoLocation"
import WeatherSkeleton from "../components/WeatherSkeleton"
import WeatherError from "../components/WeatherError"
import { useReverseGeocodeQuery } from "../../location/queries/useReverseGeocode"
import { useForecastWeatherQuery } from "../queries/useForecastWeather";
import { useCurrentWeatherQuery } from "../queries/useCurrentWeather";
import CurrentWeatherCard from "../components/CurrentWeatherCard";

import { useNavigate } from "react-router-dom";


const WeatherDashboard = () => {
    const {isLoading ,coordinates,error,getGeoLocation} = useGeoLocation();
    const  currentWeather= useCurrentWeatherQuery(coordinates)
    const forecastWeather = useForecastWeatherQuery(coordinates)
    const  geocodeLocation= useReverseGeocodeQuery(coordinates);
    const navigate = useNavigate()
   
    const handleNavigateToFavoriteCities=()=>{
      navigate("/favorites")
    }

    const handleRefresh=()=>{
       getGeoLocation();
       if(coordinates){
        currentWeather.refetch();
        forecastWeather.refetch();
        // geocodeLocation.refetch();
       }
    }
    if(isLoading) return <WeatherSkeleton/>
    if(error) return <WeatherError error={error}  getGeoLocation={getGeoLocation}/> ;
    if (!currentWeather.data|| !forecastWeather.data) return <WeatherSkeleton />;

  return (
    <div>
       <div className="flex items-center justify-between p-4">
           <div className="flex items-center gap-2">
            <Button
            variant={"outline"}
             size={"icon"} 
             onClick={handleNavigateToFavoriteCities}
             >
            <List className="size-5" />
            </Button>
           <Button
            variant={"outline"}
             size={"icon"} 
             onClick={handleRefresh}
             disabled={currentWeather.isFetching || forecastWeather.isFetching}
             >
            <RefreshCcw className={`${currentWeather.isFetching?'animate-spin':""}`} />
            </Button>
           </div>
       </div>
       <div className="grid gap-6">
            <div className="flex flex-col xl:flex-row gap-4">
            <CurrentWeatherCard data={currentWeather.data} location={geocodeLocation.data?.[0]}/>
            </div>
       </div>
    </div>
  )
}

export default WeatherDashboard