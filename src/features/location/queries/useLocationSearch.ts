import { useQuery } from "@tanstack/react-query";
import { searchLocations } from "../api/geoLocationApi";


export const useLocationSearchQuery = (query:string) => {
    return useQuery({
        queryKey: ['locationSearch', query],
        queryFn: () => searchLocations(query),
        enabled: query.trim().length >=3,
    });
}