import { MapPin } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export function EmptyFavoriteCities() {
    const navigate = useNavigate()
    const handleNavigateToHome=()=>{
        navigate("/")
    }
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <MapPin className="h-8 w-8 text-muted-foreground" />
      </div>

      <h2 className="text-xl font-semibold">
        No favorite cities yet
      </h2>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Start adding cities to your favorites to quickly access them later.
      </p>

      <Button className="mt-6" onClick={handleNavigateToHome}>
        Explore Cities
      </Button>
    </div>
  );
}