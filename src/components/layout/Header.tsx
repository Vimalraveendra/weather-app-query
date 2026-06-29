import { Link } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import { Sun ,Moon} from 'lucide-react';
import weatherIcon from "../../assets/weather-globe-icon-label-outside.svg";
import { Switch } from "../ui/switch";
const Header = () => {
  const {theme,setTheme} = useTheme();
  return (
    <header className="sticky top-0 z-50  w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
        <div className="text-xl  text-white-400 h-16  flex items-center justify-between px-4  py-8">
            <Link to={"/"} className="flex items-center ">
             <img src={weatherIcon} alt="weather" className="w-auto h-14" />
            </Link>
         
             <div>
              <div className="flex items-center gap-1">
                  <Sun className="h-6 w-6 text-yellow-500 " />
                  <Switch
                      checked={theme === "dark"}
                      onCheckedChange={(checked) =>
                      setTheme(checked ? "dark" : "light")
                      }
                      />
                  <Moon className="w-6 h-6 text-blue-500 " />
              </div>
             </div>
        </div>
    </header>
  )
}

export default Header;