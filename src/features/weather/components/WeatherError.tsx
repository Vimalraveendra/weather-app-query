import { AlertCircleIcon, MapPin } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert"
import { Button } from "../../../components/ui/button"

type WeatherErrorProps = {
  error: string;
  getGeoLocation?: () => void;
};

const WeatherError=({error,getGeoLocation}:WeatherErrorProps)=> {
  return (
    <Alert variant="destructive" className=" flex  flex-col  items-center gap-4 max-w-md  mx-auto py-4">
      <AlertCircleIcon />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription>
        <p className="text-red-400">{error}</p>
        <Button onClick={getGeoLocation} variant={"outline"} >
             <MapPin/>
             Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  )
}

export default WeatherError;