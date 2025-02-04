import "leaflet-css"
import React, { useEffect, useState } from "react"
import {
  MapContainer,
  Marker,
  TileLayer
} from "react-leaflet"
import { Location } from "../../types"
import * as T from "./../typography"
import * as S from "./styled"

import { Marker as MarkerLeaflet, icon } from "leaflet"
import ExtendedPolyline from "../custom-polyline"

//// MARKERS RELATED CODE
import markerIcon2x from "./../../markers/default/marker-icon-2x.png"
import markerIcon from "./../../markers/default/marker-icon.png"
import markerShadow from "./../../markers/default/marker-shadow.png"

import parkMarker from "./../../markers/parking/park-marker-32x32.png"
import parkMarker2x from "./../../markers/parking/park-marker-64x64.png"

const piazzaCenter = [46.04523644005277, 12.023334355216095] as LocationMarker

type LocationMarker = [lat: number, lon: number]
interface ComponentProps {
  markers: Location[]
  paths: {
    legend: string
    key: string
    path: [number, number][]
    color: string
  }[]
}

const MapComponent: React.FC<ComponentProps> = ({ markers, paths }) => {
  const [isClient, setIsClient] = useState(false)
  const [hoveredPath, setHoveredPath] = useState("")

  // Enable rendering on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <p>Loading map...</p>
  }

  ///////// MARKERS RELATED STUFF
  const DefaultIcon = icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })
  MarkerLeaflet.prototype.options.icon = DefaultIcon
  const ParkIcon = icon({
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
      <S.Legend>
        {paths.map(path => (
          <S.LegendElement
            key={path.key}
            $isHovered={!hoveredPath || hoveredPath === path.key}
            onMouseOver={() => setHoveredPath(path.key)}
            onMouseOut={() => setHoveredPath("")}
          >
            <S.Dot $color={path.color} />
            <T.H3>{path.legend}</T.H3>
          </S.LegendElement>
        ))}
      </S.Legend>
      <MapContainer
        style={{ height: "500px", width: "100%" }}
        center={piazzaCenter}
        zoom={14}
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
            <S.LeafletPopupStyled offset={[-15, 20]}>
              {marker.name}
              <a
                href={`https://www.google.com/maps?q=${marker.lat},${marker.lon}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                <br />
                Apri Google Maps
              </a>
            </S.LeafletPopupStyled>
          </Marker>
        ))}

        {/* Static paths */}
        {paths.map(path => (
          <ExtendedPolyline
            eventHandlers={{
              mouseover: _ => {
                setHoveredPath(path.key)
              },
              mouseout: _ => {
                setHoveredPath("")
              },
              click: _ => {
                setHoveredPath(path.key)
              },
            }}
            pathOptions={{
              weight: path.key === hoveredPath ? 8 : 4,
              dashArray: path.key === hoveredPath ? "1, 0" : "1, 5",
            }}
            key={path.key}
            positions={path.path as [number, number][]}
            color={path.color}
            opacity={0.8}
            hitTolerance={1000} // Expands the tap/click area // NOT WORKING
          />
        ))}

        {/* Dynamic paths */}
        {/* {pathCoordinates.length >= 2 && (
          <RouteControl
            waypoints={pathCoordinates}
          />
        )} */}
      </MapContainer>
    </S.Wrapper>
  )
}

/////// CODE TO RENDER DYNAMIC COMPONENTS
// Route Control Component for Road Path
// import "leaflet-routing-machine"

// Extend RoutingControlOptions to include createMarker
// interface ExtendedRoutingControlOptions
//   extends L.Routing.RoutingControlOptions {
//   createMarker?: (
//     i: number,
//     waypoint: L.Routing.Waypoint,
//     n: number,
//   ) => L.Marker | null
// }

// const RouteControl: React.FC<{ waypoints: [number, number][] }> = ({
//   waypoints,
// }) => {
//   const map = useMap()
//   const routingControlRef = React.useRef<L.Routing.Control | null>(null)

//   useEffect(() => {
//     if (typeof window === "undefined" || waypoints.length < 2) return

//     const routingControl = L.Routing.control({
//       waypoints: waypoints.map(coords => L.latLng(coords[0], coords[1])),
//       routeWhileDragging: false,
//       show: false,
//       addWaypoints: false,
//       createMarker: () => null, // Prevent default markers from being added
//       router: new L.Routing.OSRMv1({
//         serviceUrl: "https://router.project-osrm.org/route/v1", // OSRM service URL
//         profile: "foot", // Use the 'foot' profile for pedestrian routes
//       }),
//     } as ExtendedRoutingControlOptions).addTo(map)

//     routingControlRef.current = routingControl

//     // Hide the summary box after the control is added
//     const controlContainer = routingControl.getContainer()
//     if (controlContainer) {
//       controlContainer.style.display = "none"
//     }

//     return () => {
//       map.removeControl(routingControl)
//       routingControlRef.current = null
//     }
//   }, [map, waypoints])

//   return null
// }

export default MapComponent
