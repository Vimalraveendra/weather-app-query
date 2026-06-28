import axios from "axios"

export const fetchData=async<T> (url:string):Promise<T>=>{
    const response = await axios.get(url);
    if(!response.status){       
        throw new Error(`Weather API Error: ${response.statusText}`)
    }
   return response.data;
}