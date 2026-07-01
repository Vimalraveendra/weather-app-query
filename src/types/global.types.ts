export interface  Coordinates{
    lat:number,
    lon:number
}

export interface SearchHistoryItem {
  id: string;
  query:string;
  name: string;
  lat: number;
  lon: number;
  state?:string;
  country:string,
  timestamp:number
};