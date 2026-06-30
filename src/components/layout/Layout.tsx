import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-linear-to-br from-background to-muted ">
        <Header/>
        <main className="flex-1 container mx-auto px-4 py-8 ">
             <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout