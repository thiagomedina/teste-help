import React from 'react';
import { Container } from './styles';

const CardTracks = ({song}) => {
  return (
    <Container> 
      <p>{song.title}</p>
    </Container>
  );
};

export default CardTracks;
