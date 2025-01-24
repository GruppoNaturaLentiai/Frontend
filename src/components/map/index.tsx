import "leaflet-css"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Location } from "../../types"
import * as S from "./styled"

import L from "leaflet"

//// MARKERS RELATED CODE
import markerIcon2x from "./../../markers/default/marker-icon-2x.png"
import markerIcon from "./../../markers/default/marker-icon.png"
import markerShadow from "./../../markers/default/marker-shadow.png"

import parkMarker from "./../../markers/parking/park-marker-32x32.png"
import parkMarker2x from "./../../markers/parking/park-marker-64x64.png"

type LocationMarker = [lat: number, lon: number]

const piazzaCenter = [46.04523644005277, 12.023334355216095] as LocationMarker

const MapComponent: React.FC<{ markers: Location[] }> = ({ markers }) => {
  if (typeof window === "undefined") {
    return <p>Loading map...</p>
  }

  ///////// MARKERS RELATED STUFF
  const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })
  L.Marker.prototype.options.icon = DefaultIcon
  const ParkIcon = L.icon({
    iconUrl: parkMarker,
    iconRetinaUrl: parkMarker2x,
    shadowUrl: markerShadow,
    iconSize: [33, 41],
    iconAnchor: [12, 41],
  })

  const mapToMarker = (IconType?: string) => {
    switch (IconType) {
      case "park":
        return ParkIcon
      default:
        return DefaultIcon
    }
  }
  //////////////////////////////////////

  return (
    <S.Wrapper>
      <MapContainer
        style={{ height: "500px", width: "100%" }}
        center={piazzaCenter}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, idx) => (
          <Marker
            key={`marker-${idx}`}
            position={[marker.lat, marker.lon]}
            icon={mapToMarker(marker.iconType)}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </S.Wrapper>
  )
}

export default MapComponent
