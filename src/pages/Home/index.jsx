import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import load from '../../assets/bars.svg';

import TopTracksContainer from '../../container/TopTracks';
import Header from '../../container/Header';
import SearchResult from '../../container/SearchResult';
import Load from '../../components/Loading';
import { Container } from './styles';
const Home = () => {
  const searchResults = useSelector(state => state.Music.searchResult);
  const loading = useSelector(state => state.Music.loading);
  return (
    <Container>
      <Header />
      <Load />
      {console.log(searchResults)}
      {console.log(loading)}
      {!!searchResults.length ? <SearchResult /> : <TopTracksContainer />}
    </Container>
  );
};

export default Home;
