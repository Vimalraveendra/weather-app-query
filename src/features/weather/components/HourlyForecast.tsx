import useEmblaCarousel from "embla-carousel-react";
import type { ForecastData } from "../types/weather.types"
import { HourlyForecastCard } from "./HourlyForecastCard"

type HourlyForecastProps={
    data:ForecastData
}

const HourlyForecast= ({data}:HourlyForecastProps) => { 
    const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  return (
    <div className={"overflow-hidden"} ref={emblaRef}>
     <div className="flex space-x-4 p-2 ">
       {
       data &&  data.list.map((hour)=><HourlyForecastCard key={hour.dt} hour={hour}/>)
       }
     </div>
     </div>
  )
}

export default HourlyForecast