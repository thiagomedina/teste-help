import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../container/Header';
import SearchResult from '../../container/SearchResult';
import Load from '../../components/Loading';
import TopTracks from '../../container/TopTracks';
import { Creators as MusicActions } from '../../store/ducks/Music';

import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.Music.data.tracks?.data);
  const searchResults = useSelector(state => state.Music.searchResult);
  const loading = useSelector(state => state.Music.loading);

  useEffect(() => {
    dispatch(MusicActions.getTopTracks({}));
  }, []);
  return (
    <Container>
      <Header />
      {
        {
          true: <Load />,
          false: !!searchResults.artist ? (
            <SearchResult />
          ) : (
            <TopTracks tracks={tracks} />
          ),
        }[loading]
      }
    </Container>
  );
};

export default Home;
