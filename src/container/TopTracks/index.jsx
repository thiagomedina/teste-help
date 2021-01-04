import React from 'react';

import CardTracks from '../../components/CardTracks';
import { Container } from './styles';
const TopTracks = ({ tracks }) => {
  return (
    <Container>
      <h1>Músicas Populares</h1>
      {tracks && tracks?.map(item => <CardTracks key={item.id} song={item} />)}
    </Container>
  );
};

export default TopTracks;
