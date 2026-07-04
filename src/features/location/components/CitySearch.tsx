
import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../../../components/ui/command"
import {  Loader, Search} from "lucide-react";
import { useLocationSearchQuery } from "../queries/useLocationSearch";
import { useNavigate } from "react-router-dom";


export const CitySearch = () => {
    const [open,setOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("")
    const {isLoading,data:locations} = useLocationSearchQuery(query);

    const navigate = useNavigate();
    const handleSelect = (city:string)=>{
        const [lat,lon,name] = city.split("|")

        setOpen(false);
        navigate(`/city/${name.trim()}?lat=${lat.trim()}&lon=${lon.trim()}`);
    }
  return (
    <div className="flex flex-col gap-4 ">
      <Button onClick={() => setOpen(true)} variant="outline" className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64 border border-indigo-500 rounded-md">
        <Search  className="mr-2 h-4 w-4"/>
        Search Cities...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command  className="rounded-lg border shadow-md">
          <CommandInput 
          placeholder="Search city..." 
          className="h-10 w-full border-none bg-transparent px-3 outline-none placeholder:text-muted-foreground" 
          value={query}
          onValueChange={setQuery}
          />
          <CommandList className="p-2 space-y-2">
            {
                 query.length<3 && !isLoading && (
               <CommandEmpty>No cities found.</CommandEmpty>
                 )
            }
       
      
            { locations && locations.length>0 && (
                <CommandGroup heading="Suggestions" className="space-y-2">
                    { isLoading && (
                        <div className="flex items-center justify-center p-4">
                            <Loader className="h-4 w-4 animate-spin"/>
                        </div>
                 )}
            {
                locations.map((location,idx)=>{
                    return ( <CommandItem 
                     className="cursor-pointer rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                     key={`{${location.lat}-${location.lon}-${idx}`}
                     value={`${location.lat} | ${location.lon} | ${location.name} | ${location.country}`}
                     onSelect={handleSelect}
                     >
                     <Search className="h-4 w-4"/>
                     <span> {location.name}</span>
                     {
                        location.state && (
                          <span className="text-sm text-muted-foreground">, {location.state}</span>
                        )
                     }
                     <span className="text-sm text-muted-foreground">, {location.country}</span>
                  </CommandItem>
                )})
            }
           </CommandGroup>
            )
            }
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}