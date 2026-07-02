import { useQuery } from "@tanstack/react-query";
import { getReverseGeocode } from "../api/geoLocationApi";
import type { Coordinates } from "../../../types/global.types";



export const useReverseGeocodeQuery = (coordinates:Coordinates|null) => {
    return useQuery({
        queryKey: ['reverseGeocode', coordinates?.lat,coordinates?.lon],
        queryFn: () => getReverseGeocode(coordinates!),
        enabled: !!coordinates
    });
}