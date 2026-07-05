import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/Layout";
import WeatherDashboardPage from "../pages/WeatherDashboardPage";
import FavoriteCitiesPage from "../pages/FavoriteCitiesPage";

const routesConfig = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
     { index:true, Component:WeatherDashboardPage},
     { path:"/favorites", Component:FavoriteCitiesPage }
    ]
}
])
export default routesConfig;