import React from 'react';
import { Container, Image, Info, DurationTrack } from './styles';
import convertDurationTrack from '../../utils/convertDurationTrack';
import PlayButton from '../PlayButton';
import FavoriteButton from '../FavoriteButton';
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
      <PlayButton url={song.preview} />
      <FavoriteButton/>
    </Container>
  );
};

export default CardTracks;
