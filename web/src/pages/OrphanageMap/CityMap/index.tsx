import React, { useEffect, useState } from 'react';

// Components
import { Map, TileLayer } from 'react-leaflet';

// Libs
import { LatLngExpression } from 'leaflet';

// styles
import { mapStyles } from './styles';

import 'leaflet/dist/leaflet.css';

const CityMap: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<LatLngExpression>([
    0,
    0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);
  return (
    <Map center={initialPosition} zoom={15} style={mapStyles}>
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </Map>
  );
};

export default CityMap;
