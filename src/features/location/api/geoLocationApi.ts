import { createUrl } from "../../../lib/api/client";
import { API_CONFIG } from "../../../lib/api/config";
import { fetchData } from "../../../lib/api/request";
import type { Coordinates} from "../../../types/global.types";
import type { GeocodeData } from "../types/location.types";

export const   getReverseGeocode=({lat,lon}:Coordinates):Promise<GeocodeData[]>=>{
   const url = createUrl(`${API_CONFIG.GEO_URL}/reverse`,{
     lat:lat.toString(),
     lon:lon.toString(),
     limit:1
   });
  return fetchData<GeocodeData[]>(url);
}
export const   searchLocations=(query:string):Promise<GeocodeData[]>=>{
   const url = createUrl(`${API_CONFIG.GEO_URL}/direct`,{
    q:query,
     limit:5
   });
  return fetchData<GeocodeData[]>(url);
}