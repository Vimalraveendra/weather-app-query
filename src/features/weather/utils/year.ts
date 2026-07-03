import { format } from "date-fns";


export const formatYear=(timeStamp:number)=>{
   return format(new Date(timeStamp*1000),"yyyy-mm-dd");
   
}