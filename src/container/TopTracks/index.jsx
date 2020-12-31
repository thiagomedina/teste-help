import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators as TopTracksActions } from '../../store/ducks/topTracks';
import CardTracks from '../../components/CardTracks';
import { Container } from './styles';
const TopTracks = () => {
  const dispatch = useDispatch();

  const tracks = useSelector(state => state.topTracks.data.tracks?.data);

  useEffect(() => {
    dispatch(TopTracksActions.getTopTracks({}));
  }, []);

  return (
    <Container>
      <h1>popular</h1>
      {tracks?.map(item => (
        <CardTracks key={item.id} song={item} />
      ))}
    </Container>
  );
};

export default TopTracks;
