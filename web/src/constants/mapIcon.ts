// Assets
import mapMarker from '../assets/images/icon.svg';

// Leaflet
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [170, 14],
});

export default mapIcon;
