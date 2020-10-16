import React, { useEffect, useState } from 'react';

// Components
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';

// Icons
import mapIcon from '../../../constants/mapIcon';
import { FiArrowRight } from 'react-icons/fi';

// Libs
import { LatLngExpression } from 'leaflet';

// styles
import { MapPopup, mapStyles } from './styles';
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

      <Marker icon={mapIcon} position={initialPosition}>
        <MapPopup closeButton={false} minWidth={240} maxWidth={240}>
          Lar das meninas
          <Link to="/orphanages/1">
            <FiArrowRight />
          </Link>
        </MapPopup>
      </Marker>
    </Map>
  );
};

export default CityMap;
