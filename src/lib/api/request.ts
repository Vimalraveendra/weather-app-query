import axios from "axios"

export const fetchData=async<T> (url:string):Promise<T>=>{
    try{
          const response = await axios.get(url);
            return response.data;
    }catch(error){
          if(axios.isAxiosError(error)){
            throw new Error(error.response?.data?.message?? error.message, { cause: error })
        }
        throw error
    }
 
}