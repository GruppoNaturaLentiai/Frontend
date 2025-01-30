import { Polyline, PolylineProps } from "react-leaflet";
import L from "leaflet";
import React, { useEffect, useRef } from "react";

// Extend PolylineProps to include hitTolerance
interface ExtendedPolylineProps extends PolylineProps {
  hitTolerance?: number;
}

const ExtendedPolyline: React.FC<ExtendedPolylineProps> = ({ hitTolerance, ...props }) => {
  const polylineRef = useRef<L.Polyline | null>(null);

  useEffect(() => {
    if (polylineRef.current && hitTolerance !== undefined) {
      (polylineRef.current.options as any).hitTolerance = hitTolerance;
    }
  }, [hitTolerance]);

  return <Polyline ref={polylineRef} {...props} />;
};

export default ExtendedPolyline;