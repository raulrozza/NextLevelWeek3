import React from 'react';

// Assets
import mapMarker from '../../assets/images/icon.svg';

// Components
import CityMap from './CityMap';

// Icons
import { FiPlus } from 'react-icons/fi';

// Styles
import { Container, CreateOrphanageButton, SideBar } from './styles';

const OrphanageMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Capivari de Baixo</strong>
          <span>Santa Catarina</span>
        </footer>
      </SideBar>

      <CityMap />

      <CreateOrphanageButton to="">
        <FiPlus />
      </CreateOrphanageButton>
    </Container>
  );
};

export default OrphanageMap;
