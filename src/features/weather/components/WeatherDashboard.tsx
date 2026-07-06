import { RefreshCcw } from "lucide-react"
import { Button } from "../../../components/ui/button"
import WeatherSkeleton from "./WeatherSkeleton"
import WeatherError from "./WeatherError"
import CurrentWeatherCard from "./CurrentWeatherCard";
import WeatherDetails from "./WeatherDetails"
import { useWeather } from "../hooks/useWeather"
import HourlyForecast from "./HourlyForecast";
import { WeatherForecast } from "./WeatherForecast";
import WeatherMap from "./WeatherMap";
import { CitySearch } from "../../location/components/CitySearch";
import FavoriteCitiesButton from "../../favorites/components/FavoritesCitiesButton";


const WeatherDashboard = () => {

  const {
    coordinates,
    currentWeather,
    forecastWeather,
    geocodeLocation,
    isLoading,
    error,
    getGeoLocation,
  } = useWeather();
   
    const handleRefresh=()=>{
       getGeoLocation()
    }
    
    if(isLoading) return <WeatherSkeleton/>
    if(error) return <WeatherError error={error}  getGeoLocation={getGeoLocation}/> ;
    if (!currentWeather.data|| !forecastWeather.data) return <WeatherSkeleton />;

  return (
    <div>
       <div className="flex items-center justify-between p-4">
           <CitySearch/>
           <div className="flex items-center gap-2">
           <FavoriteCitiesButton/>
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
              <WeatherDetails data={currentWeather.data}/>
            </div>
             <HourlyForecast data={forecastWeather.data}/>
             <div className="flex flex-col xl:flex-row gap-4 ">
              <div className="flex-1">
                  <WeatherForecast data={forecastWeather.data}/>
              </div>
              <div className="flex-1 min-h-100">
                 <WeatherMap data={{lat:coordinates!.lat,lon:coordinates!.lon,temp:currentWeather.data.main.temp}}/>
               </div>
            </div>
       </div>
    </div>
  )
}

export default WeatherDashboard