import React from 'react';
import convertDurationTrack from '../../utils/convertDurationTrack';
import PlayButton from '../PlayButton';
import FavoriteButton from '../FavoriteButton';
import { Buttons, Container, Image, Info } from './styles';

const CardTracks = ({ song }) => {
  return (
    <Container>
      <Image>
        <img src={song.album.cover_small} alt={song.title} />
      </Image>
      <Info>
        <span>{song.title}</span>
        <p>{song.artist.name}</p>
      </Info>
      <Buttons>
        <div>{convertDurationTrack(song.duration)}</div>
        <PlayButton url={song.preview} />
        <FavoriteButton track={song}/>
      </Buttons>
    </Container>
  );
};

export default CardTracks;
