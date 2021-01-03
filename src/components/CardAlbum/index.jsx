import React from 'react';

import { Container, Image, Info } from './styles';

const CardAlbum = ({ album }) => {
  return (
    <Container>
      {console.log(album)}
      <Image>
        <img src={album.cover_medium} alt={album.title} />
      </Image>
      <Info>
        <span>{album.title}</span>
        <p>{album.artist.name}</p>
      </Info>
    </Container>
  );
};

export default CardAlbum;
