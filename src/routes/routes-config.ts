import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/Layout";
import WeatherDashboard from "../features/weather/pages/WeatherDashboard";

const routesConfig = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
     { index:true, Component:WeatherDashboard},
    ]
}
])
export default routesConfig;