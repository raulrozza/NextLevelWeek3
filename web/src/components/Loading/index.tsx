import React from 'react';

// Components
import ReactLoading from 'react-loading';

// Styles
import { Container } from './styles';

const Loading: React.FC = () => (
  <Container>
    <ReactLoading type="spin" />
  </Container>
);

export default Loading;
