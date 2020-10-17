import React from 'react';

// Components
import { Map, TileLayer, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';

// Hooks
import useGeoposition from '../../../hooks/useGeoposition';
import { useFetchMany } from '../../../hooks/useFetchMany';

// Icons
import mapIcon from '../../../constants/mapIcon';
import { FiArrowRight } from 'react-icons/fi';

// styles
import { MapPopup, mapStyles } from './styles';
import 'leaflet/dist/leaflet.css';

// Types
import { IOrphanage } from '../../../interfaces/api/Orphanage';

const CityMap: React.FC = () => {
  const initialPosition = useGeoposition();
  const { data: orphanages } = useFetchMany<IOrphanage>('orphanages');

  return (
    <Map center={initialPosition} zoom={15} style={mapStyles}>
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {orphanages.map(orphanage => (
        <Marker
          key={orphanage.id}
          icon={mapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
        >
          <MapPopup closeButton={false} minWidth={240} maxWidth={240}>
            {orphanage.name}
            <Link to={`/orphanages/${orphanage.id}`}>
              <FiArrowRight />
            </Link>
          </MapPopup>
        </Marker>
      ))}
    </Map>
  );
};

export default CityMap;
