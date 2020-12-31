import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as TopTracks } from '../../store/ducks/topTracks';
import { Container } from './styles';
const Home = () => {
  const dispatch = useDispatch();
  let topTracks = useSelector(state => state.topTracks.getTopTracksLoading);

  useEffect(() => {
    dispatch(TopTracks.getTopTracks({}));
    console.log(topTracks);
  });

  return (
    <Container>
      <h1>home</h1>
    </Container>
  );
};

export default Home;
