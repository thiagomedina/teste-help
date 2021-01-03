import React from 'react';
import loadSvg from '../../assets/bars.svg';
import { Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <img src={loadSvg} alt="" />
      <p>Carregando...</p>
    </Container>
  );
};

export default Loading;
