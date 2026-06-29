const Footer = () => {  
  return (
    <footer className=" border-t backdrop-blur py-6 supports-[backdrop-filter]:bg-background/60 px-8">
         <div className="mx-auto px-4 text-center text-gray-400">
         <p>© {new Date().getFullYear()} Weather App. All rights reserved.</p>
         </div>
    </footer>
  )
}

export default Footer