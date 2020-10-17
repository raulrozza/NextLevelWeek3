import { useEffect, useState } from 'react';

// Libs
import { LatLngExpression } from 'leaflet';

export default function useGeoposition(): LatLngExpression {
  const [clientPosition, setClientPosition] = useState<LatLngExpression>([
    0,
    0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setClientPosition([latitude, longitude]);
    });
  }, []);

  return clientPosition;
}
