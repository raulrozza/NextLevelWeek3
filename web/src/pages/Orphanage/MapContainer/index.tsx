import React from 'react';

// Components
import { Map, Marker, TileLayer } from 'react-leaflet';

// Icons
import mapIcon from '../../../constants/mapIcon';

// Styles
import { Container } from './styles';

// Types
import { MapContainerProps } from './types';

// Utils
import { getGoogleMapsLink } from './utils';

const MapContainer: React.FC<MapContainerProps> = ({ orphanage }) => (
  <Container>
    <Map
      center={[orphanage.latitude, orphanage.longitude]}
      zoom={16}
      style={{ width: '100%', height: 280 }}
      dragging={false}
      touchZoom={false}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        interactive={false}
        icon={mapIcon}
        position={[orphanage.latitude, orphanage.longitude]}
      />
    </Map>

    <footer>
      <a
        href={getGoogleMapsLink(orphanage.latitude, orphanage.longitude)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver rotas no Google Maps
      </a>
    </footer>
  </Container>
);

export default MapContainer;
