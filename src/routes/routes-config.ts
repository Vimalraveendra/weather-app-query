import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/Layout";
import WeatherDashboardPage from "../pages/WeatherDashboardPage";

const routesConfig = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
     { index:true, Component:WeatherDashboardPage},
    ]
}
])
export default routesConfig;