import { API_CONFIG } from "./config";

export const createUrl=(url:string,params:Record<string,string|number>)=>{
    const searchParams = new URLSearchParams({
        appId:API_CONFIG.API_KEY,
        ...params
    })
  return  `${url}?${searchParams.toString()}`
}