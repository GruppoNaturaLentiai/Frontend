import "leaflet-css"
import React, { useEffect, useMemo, useState } from "react"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
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

import daffodilMarker from "./../../markers/daffodil/daffodil-marker-32x32.png"
import daffodilMarker2x from "./../../markers/daffodil/daffodil-marker-64x64.png"

import Icon from "../icons"

const chaletColDArtent = [46.00799922503996, 12.023267973535743,] as LocationMarker

type LocationMarker = [lat: number, lon: number]
interface ComponentProps {
  markers: Location[]
  paths: {
    legend: string
    key: string
    path: [number, number][]
    color: string
    notes?: string
    time?: string
    totDistance?: string
    posElevation?: string
    negElevation?: string
    difficulty?: string
    type?: string
    mean: "car" | "foot"
  }[]
}

const MapComponent: React.FC<ComponentProps> = ({ markers, paths }) => {
  const [isClient, setIsClient] = useState(false)
  const [selectedPath, setSelectedPath] = useState("piazza-lentiai-chalet-col-d-artent")

  // Enable rendering on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const showPathInfo = useMemo(() => {
    const path = paths.find(path => path.key === selectedPath)
    if (!path) return null
    const { notes, time, totDistance, posElevation, negElevation, difficulty, type } = path
    if (!notes || !time || !totDistance || !posElevation || !negElevation || !difficulty || !type) return null
    return { notes, time, totDistance, posElevation, negElevation, difficulty, type }

  }, [selectedPath])

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
  const DaffodilIcon = icon({
    iconUrl: daffodilMarker,
    iconRetinaUrl: daffodilMarker2x,
    shadowUrl: markerShadow,
    iconSize: [33, 41],
    iconAnchor: [12, 41],
  })

  const mapToMarker = (IconType?: string) => {
    switch (IconType) {
      case "park":
        return ParkIcon
      case "daffodil":
        return DaffodilIcon
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
            $isSelected={selectedPath === path.key}
            onClick={() => setSelectedPath(path.key)}
          >
            <S.Dot $color={path.color} />
            <T.H3 style={{ textAlign: "center" }}>{path.legend}</T.H3>
          </S.LegendElement>
        ))}
      </S.Legend>
      <S.PathInfo>
        {showPathInfo && (
          <>
            <S.PathInfoUpper>
              <S.PathInfoElement>
                <S.PathInfoIcon>
                  <Icon type="time" />
                </S.PathInfoIcon>
                <T.P2>{showPathInfo.time}</T.P2>
              </S.PathInfoElement>
              <S.PathInfoElement>
                <S.PathInfoIcon>
                  <Icon type="totDistance" />
                </S.PathInfoIcon>
                <T.P2>{showPathInfo.totDistance}</T.P2>
              </S.PathInfoElement>
              <S.PathInfoElement>
                <S.PathInfoIcon>
                  <Icon type={showPathInfo.type === "andata" ? "andata" : "andata-ritorno"} />
                </S.PathInfoIcon>
                <T.P2>{showPathInfo.type}</T.P2>
              </S.PathInfoElement>
              <S.PathInfoElement>
                <S.PathInfoIcon>
                  <Icon type="posElevation" />
                </S.PathInfoIcon>
                <T.P2>{showPathInfo.posElevation}</T.P2>
              </S.PathInfoElement>
              <S.PathInfoElement>
                <S.PathInfoIcon>
                  <Icon type="negElevation" />
                </S.PathInfoIcon>
                <T.P2>{showPathInfo.negElevation}</T.P2>
              </S.PathInfoElement>
              <S.PathInfoElement>
                <S.PathInfoIcon>
                  <Icon type="hiker" />
                </S.PathInfoIcon>
                <T.P2>{showPathInfo.difficulty}</T.P2>
              </S.PathInfoElement>
            </S.PathInfoUpper>
            <T.P2>{showPathInfo.notes}</T.P2>
          </>
        )}
      </S.PathInfo>
      <MapContainer
        style={{ height: "500px", width: "100%" }}
        center={chaletColDArtent}
        zoom={12}
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
              {marker.name === "Parcheggio" && (
                <a
                  href={`https://www.google.com/maps?q=${marker.lat},${marker.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  <br />
                  Apri Google Maps
                </a>
              )}
            </S.LeafletPopupStyled>
          </Marker>
        ))}

        {/* Static paths */}
        {paths.map(path => (
          <ExtendedPolyline
            pathOptions={{
              weight: path.key === selectedPath ? 8 : 4,
              dashArray: path.key === selectedPath ? "1, 0" : "1, 5",
              opacity: path.key === selectedPath ? 1 : 0.4,
            }}
            key={path.key}
            positions={path.path}
            color={path.color}
            hitTolerance={1000} // Expands the tap/click area // NOT WORKING
          />
        ))}

      </MapContainer>
    </S.Wrapper>
  )
}


export default MapComponent
