
import { MapContainer, TileLayer, Marker, } from "react-leaflet";
import { DivIcon, type LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { formatTemp } from "../utils/temp";

type WeatherMapProps = {
  data:{
    lat:number,
    lon:number,
    temp:number
  }
};

const WeatherMap=({ data}: WeatherMapProps)=> {
 const {lat,lon,temp} =data;
  const position: LatLngExpression = [lat, lon];
  const tempIcon = new DivIcon({
  className: "custom-marker",
  html: `
    <div style="text-align:center">
      <div style="
        background:#2563eb;
        color:white;
        padding:2px 6px;
        border-radius:8px;
        font-size:15px;
        width:30px;
        margin-top:8px;
      ">
        ${formatTemp(temp)}
      </div>
    </div>
  `,
});


  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "100%", width: "100%", borderRadius:"6px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}  icon={tempIcon}>
      </Marker>
    </MapContainer>
  );
}
export default WeatherMap;