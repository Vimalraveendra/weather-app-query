import { format } from "date-fns"

export const formatTime=(time:number)=>{
 return format(new Date(time*1000),"h:mm a");
}