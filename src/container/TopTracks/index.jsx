import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators as TopTracksActions } from '../../store/ducks/topTracks';

import CardTracks from '../../components/CardTracks';

const TopTracks = () => {
  const dispatch = useDispatch();

  let tracks = useSelector(state => state.topTracks.data);
  useEffect(() => {
    dispatch(TopTracksActions.getTopTracks({}));
  }, []);

  return (
    <>
    
      <CardTracks />
      {console.log(tracks)}
    </>
  );
};

export default TopTracks;
