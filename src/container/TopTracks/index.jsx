import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import fakeapi from '../../fakeapi.json';

// import { Creators as MusicActions } from '../../store/ducks/Music';
import CardTracks from '../../components/CardTracks';
import { Container } from './styles';
const TopTracks = () => {
  // const dispatch = useDispatch();

  // const tracks = useSelector(state => state.Music.data);
  const mock = fakeapi.tracks.data;
  useEffect(() => {
    // dispatch(MusicActions.getTopTracks({}));
  }, []);

  return (
    <Container>
      <h1>Músicas Populares</h1>
      {/* {tracks && tracks?.map(item => <CardTracks key={item.id} song={item} />)} */}
      {mock?.map(item => (
        <CardTracks key={item.id} song={item} />
      ))}
    </Container>
  );
};

export default TopTracks;
