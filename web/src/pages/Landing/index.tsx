import React from 'react';

// Assets
import logo from '../../assets/images/logo.svg';

// Icons
import { FiArrowRight } from 'react-icons/fi';

// Styles
import { Container, ContentWrapper, EnterLink, Location, Main } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logo} alt="Happy" />

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <Location>
          <strong>Capivari de Baixo</strong>
          <span>Santa Catarina</span>
        </Location>

        <EnterLink>
          <FiArrowRight color="rgba(0,0,0,0.6)" />
        </EnterLink>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
