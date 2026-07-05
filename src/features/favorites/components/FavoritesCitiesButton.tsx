import { List } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { useNavigate } from "react-router-dom"


const FavoriteCitiesButton = () => {
    const navigate= useNavigate();
    const handleNavigateToFavoriteCities=()=>{
      navigate("/favorites")
    }
  return (
      <Button
            variant={"outline"}
             size={"icon"} 
             onClick={handleNavigateToFavoriteCities}
             >
            <List className="size-5" />
    </Button>
  )
}

export default FavoriteCitiesButton