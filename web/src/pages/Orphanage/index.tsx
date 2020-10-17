import React, { useState } from 'react';

// Components
import Aside from '../../components/Aside';
import Loading from '../../components/Loading';
import MapContainer from './MapContainer';

// Hooks
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

// Icons
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';

// Styles
import { Container, Content, ImageButton, Images, Main } from './styles';

// Types
import { withTheme } from 'styled-components';
import { IOrphanage } from '../../interfaces/api/Orphanage';
import { OrphanageParams, OrphanageProps } from './types';

const Orphanage: React.FC<OrphanageProps> = ({ theme }) => {
  const { id } = useParams<OrphanageParams>();
  const { data: orphanage, loading } = useFetch<IOrphanage>(
    `/orphanages/${id}`,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (loading) return <Loading />;
  if (!orphanage) return null;

  return (
    <Container>
      <Aside />

      <Main>
        <div className="orphanage-details">
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => (
              <ImageButton
                active={index === activeImageIndex}
                key={image.id}
                className="active"
                type="button"
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </ImageButton>
            ))}
          </Images>

          <Content>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer orphanage={orphanage} />

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color={theme.colors.primary} />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>

              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color={theme.colors.quarternaryDark} />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color={theme.colors.danger} />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color={theme.colors.white} />
              Entrar em contato
            </button>
          </Content>
        </div>
      </Main>
    </Container>
  );
};

export default withTheme(Orphanage);
