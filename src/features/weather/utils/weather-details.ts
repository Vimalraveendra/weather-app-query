
import { Sunrise,Sunset,Compass,Gauge,Eye,Calendar  } from "lucide-react";
import { formatTime } from "./time";
import { getWindDirection } from "./wind-directions";
import { formatDay } from "./day";

type Weather = {
  sunrise: number;
  sunset:number,
  visibility: number,
  pressure:number,
  deg:number,
  dt:number
};
export const  createWeatherDetails=(weather:Weather)=>[
    {
         label:"Sunrise",
         icon:Sunrise,
         value:formatTime(weather.sunrise),
         color:"text-orange-400",
    },
    {
         label:"Sunset",
         icon:Sunset,
         value:formatTime(weather.sunset),
         color:"text-blue-400",
    },
    {
         label:"Pressure",
         icon:Gauge,
         value:`${weather.pressure} hpa`,
         color:"text-purple-400",
    },
    {
         label:"Wind Direction",
         icon:Compass,
         value:`${getWindDirection(weather.deg)} (${weather.deg}°)`,
         color:"text-orange-400",
    },
       {
         label:"Visibility",
         icon:Eye,
         value:weather.visibility,
         color:"text-yellow-400",
    },
       {
         label:"Day",
         icon:Calendar,
         value:formatDay(weather.dt),
         color:"text-indigo-400",
    },

]