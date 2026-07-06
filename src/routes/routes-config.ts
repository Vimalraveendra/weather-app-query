import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/Layout";
import WeatherDashboardPage from "../pages/WeatherDashboardPage";
import FavoriteCitiesPage from "../pages/FavoriteCitiesPage";
import CityWeather from "../features/location/components/CityWeather";

const routesConfig = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
     { index:true, Component:WeatherDashboardPage},
     {  path:"/city/:cityName",Component:CityWeather},
     { path:"/favorites", Component:FavoriteCitiesPage },
    ]
}
])
export default routesConfig;