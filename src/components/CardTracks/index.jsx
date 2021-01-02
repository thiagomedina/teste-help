import React from 'react';
import convertDurationTrack from '../../utils/convertDurationTrack';
import PlayButton from '../PlayButton';
import FavoriteButton from '../FavoriteButton';
import { Buttons, Container, Image, Info, DurationTrack } from './styles';

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
      <DurationTrack>{convertDurationTrack(song.duration)}</DurationTrack>
      <Buttons>
        <PlayButton url={song.preview} />
        <FavoriteButton />
      </Buttons>
    </Container>
  );
};

export default CardTracks;
