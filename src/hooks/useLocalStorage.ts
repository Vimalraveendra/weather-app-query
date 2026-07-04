import {useState,useEffect} from 'react'
export function useLocalStorage <T>(key:string ,initialValue:T) {
   const [value ,setValue] =useState<T>(()=>{
     const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
   })

useEffect(() => {
  try{
       localStorage.setItem(key,JSON.stringify(value));
  }catch(error){
    console.log(error)
  }
  }, [key, value]);
  return [value, setValue] as const;
}