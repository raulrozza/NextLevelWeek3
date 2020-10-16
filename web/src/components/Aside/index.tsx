import React from 'react';

// Assets
import mapMarkerImg from '../../assets/images/icon.svg';

// Hooks
import { useHistory } from 'react-router-dom';

// Icons
import { FiArrowLeft } from 'react-icons/fi';

// Styles
import Sidebar from '../../styles/Sidebar';

const Aside: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Sidebar>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Sidebar>
  );
};

export default Aside;
