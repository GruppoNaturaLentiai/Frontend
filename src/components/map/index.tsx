import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-css";
import * as S from "./styled"
import { Location } from "../../types";
import L from "leaflet";

type LocationMarker = [
  lat: number,
  lon: number
]

const piazzaCenter = [
  46.04523644005277, 12.023334355216095
] as LocationMarker

const MapComponent: React.FC<{ markers: Location[] }> = ({ markers }) => {
  if (typeof window === "undefined") {
    return <p>Loading map...</p>; // Render fallback during SSR
  }

  const DefaultIcon = L.icon({
    iconUrl: "/leaflet/marker-icon.png",
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <S.Wrapper>
      <MapContainer
        style={{ height: "500px", width: "100%" }}
        center={piazzaCenter}
        zoom={15}
        scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, idx) => (
            <Marker key={`marker-${idx}`} position={[marker.lat, marker.lon]} >
              <Popup>
                {marker.name}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </S.Wrapper>
  );
};

export default MapComponent;