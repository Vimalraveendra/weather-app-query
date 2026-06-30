import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/Layout";

const routesConfig = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout
    }
])

export default routesConfig;