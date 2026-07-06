import { useParams, useSearchParams } from "react-router-dom"
import { useCurrentWeatherQuery } from "../../weather/queries/useCurrentWeather"
import { useForecastWeatherQuery } from "../../weather/queries/useForecastWeather";
import WeatherSkeleton from "../../weather/components/WeatherSkeleton";
import LocationError from "../../location/components/LocationError";
import { CitySearch } from "./CitySearch";
import CurrentWeatherCard from "../../weather/components/CurrentWeatherCard";
import WeatherDetails from "../../weather/components/WeatherDetails";
import HourlyForecast from "../../weather/components/HourlyForecast";
import { WeatherForecast } from "../../weather/components/WeatherForecast";
import WeatherMap from "../../weather/components/WeatherMap";
import { useSearchHistory } from "../hooks/useSearchHistory";
import { FavoriteButton } from "../../favorites/components/FavoriteButton";
import FavoriteCitiesButton from "../../favorites/components/FavoritesCitiesButton";



const CityWeather = () => {
   const[searchParams]=useSearchParams();
   const {history} = useSearchHistory();
   const params = useParams();
   const location = history.find(item=>item.name===params.cityName)
   const lat = parseFloat(searchParams.get("lat")??"0");
   const lon = parseFloat(searchParams.get("lon")??"0");
   const coordinates ={lat,lon};
   const  currentWeather= useCurrentWeatherQuery(coordinates)
   const forecastWeather = useForecastWeatherQuery(coordinates)


  if(currentWeather.isLoading || forecastWeather.isLoading|| !params.cityName) return <WeatherSkeleton/>
  if(currentWeather.error|| forecastWeather.error) return <LocationError/> ;
  if (!currentWeather.data|| !forecastWeather.data||!params.cityName) return <WeatherSkeleton />;

  return (
    <div>
       <div className="flex items-center justify-between p-4">
           <CitySearch/>
           <div className="flex items-center gap-2">
              <FavoriteButton data={{...currentWeather.data,name:params.cityName}}/>
              <FavoriteCitiesButton/>
           </div>
          
       </div>
       <div className="grid gap-6">
           <div className="flex flex-col xl:flex-row gap-4">
           <CurrentWeatherCard data={currentWeather.data} location={location}/>
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

export default CityWeather