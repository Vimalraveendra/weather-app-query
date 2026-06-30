
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './providers/ThemeProvider'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import routesConfig from './routes/routes-config'
import './App.css'

    // Create a client
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
       staleTime:5*60*1000,
       gcTime:10*60*1000,
       retry:false,
       refetchOnWindowFocus:false
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme='dark'>
       <RouterProvider router={routesConfig}/>
       <Toaster richColors/>
    </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
