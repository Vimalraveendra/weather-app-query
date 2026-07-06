import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

 const NotFoundPage = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>

      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}

export default NotFoundPage;