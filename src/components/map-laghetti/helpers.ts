// This function is to be used to decode the polyline

const decodePolyline = (encoded: string) => {
  let points = []
  let index = 0
  let lat = 0
  let lng = 0

  while (index < encoded.length) {
    let b,
      shift = 0,
      result = 0
    do {
      b = encoded.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)
    let deltaLat = result & 1 ? ~(result >> 1) : result >> 1
    lat += deltaLat

    shift = 0
    result = 0
    do {
      b = encoded.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)
    let deltaLng = result & 1 ? ~(result >> 1) : result >> 1
    lng += deltaLng

    points.push([lat / 1e5, lng / 1e5])
  }

  return points
}
