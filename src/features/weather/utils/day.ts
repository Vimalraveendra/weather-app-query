export const formatDay=(timeStamp:number)=>{
    const date = new Date(timeStamp*1000);
    return date.toLocaleDateString('en-Us',{weekday:'long'})
}