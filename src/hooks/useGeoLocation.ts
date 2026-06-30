import { useEffect, useState } from "react"
import type { Coordinates } from "../types/global.types"

export interface GeolocationState{
    isLoading:boolean,
    coordinates:Coordinates|null,
    error:string|null
}

export const useGeoLocation = () => {
 const [geoState,setGeoState] =useState<GeolocationState>({
     isLoading:true,
     coordinates:null,
     error:null
 })

 
   const getGeoLocation=()=>{
     if(!navigator.geolocation){
       return ;
     }
     navigator.geolocation.getCurrentPosition((pos)=>{
         const coordinates = {
            lat:pos.coords.latitude,
            lon:pos.coords.longitude
         }
         setGeoState({ isLoading:false,coordinates:coordinates,error:null})
     },
     (err)=>{
        setGeoState({isLoading:false,coordinates:null, error:err.message})
     },
     {
        enableHighAccuracy:true,
        timeout:3000,
        maximumAge:0
     }
    )
   
   }

   useEffect(()=>{
    getGeoLocation()
   },[]);

   return{
   ... geoState,getGeoLocation
   }
   
}
