import { useLocalStorage } from "../../../hooks/useLocalStorage";
import type { Coordinates } from "../../../types/global.types";
import type { FavoriteCity } from "../types/favorites.types";

const KEY = "favorites";
const MAX_ITEMS = 20;

export const useFavorites = () => {
  const[favorites,setFavorites]=useLocalStorage<FavoriteCity[]>(KEY,[])

    const addToFavorites= (city: Omit<FavoriteCity , "id" | "addedAt">) => {
      const favoriteCity: FavoriteCity = {
        ...city,
        id: `${city.name}-${city.lat}-${city.lon}`,
        addedAt: Date.now(),
      };
       const exists = favorites.some(f=>f.id===favoriteCity.id);
       if(exists) return favorites;

    
      const updatedFavorites= [...favorites,favoriteCity].slice(0, MAX_ITEMS);

       setFavorites(updatedFavorites);
    };
   const removeFavorite = (cityId:string) => {
        const filteredFavorites = favorites.filter(f=>f.id!==cityId)
        setFavorites(filteredFavorites);
      }
    const isFavorite =(coords:Coordinates)=>  favorites.some(f=>f.lat ==coords.lat && f.lon==coords.lon);
  return{ favorites,addToFavorites,removeFavorite,isFavorite}
};