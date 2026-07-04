import { AlertCircleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert"


const LocationError=()=> {
  return (
    <Alert variant="destructive" className=" flex  flex-col  items-center gap-4 max-w-md  mx-auto py-4">
      <AlertCircleIcon />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription>
        <p className="text-red-400">Failed to load weather data</p>
      </AlertDescription>
    </Alert>
  )
}

export default LocationError;