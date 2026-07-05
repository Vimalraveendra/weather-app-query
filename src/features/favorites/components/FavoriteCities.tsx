import { EmptyFavoriteCities } from "./EmptyFavoriteCities"
import { useFavorites } from "../hooks/useFavorites"
import { FavoriteCityCard } from "./FavoriteCityCard"


export const FavoriteCities = () => {
  const {favorites,removeFavorite} = useFavorites()
  return(
     <>
      { favorites.length===0?<EmptyFavoriteCities/>:(
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {
                             favorites && favorites.map((fav)=><FavoriteCityCard key={fav.id} favorite={fav} onRemoveFavorite={removeFavorite} />)
                          }
            </div>
           
      )
      }
     </>
  )
}