import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../container/Header';
import SearchResult from '../../container/SearchResult';
import Load from '../../components/Loading';
import { Container } from './styles';
import TopTracks from '../../container/TopTracks';

const Home = () => {
  const searchResults = useSelector(state => state.Music.searchResult);
  const loading = useSelector(state => state.Music.loading);
  return (
    <Container>
      <Header />
      {
        {
          ['true']: <Load />,
          ['false']: !!searchResults.artist ? <SearchResult /> : <TopTracks />,
        }[loading]
      }
    </Container>
  );
};

export default Home;
