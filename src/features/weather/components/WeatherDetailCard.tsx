import type { WeatherDetail } from "../types/weather.types";

type WeatherDetailProps={
    detail:WeatherDetail
}

const WeatherDetailCard = ({detail}:WeatherDetailProps) => {
    const {label,icon:Icon,value,color} =detail;
  return (
            <div className="flex gap-3 items-center rounded-lg border p-4">
                    <Icon className={`h-5 w-5 ${color}`}/>
                    <p>{label}</p>
                    <p className=" text-sm text-muted-foreground">{value}</p>
            </div>
       )
}

export default WeatherDetailCard