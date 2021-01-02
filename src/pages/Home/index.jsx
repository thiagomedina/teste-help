import React from 'react';

import TopTracksContainer from '../../container/TopTracks'
import Header from '../../container/Header'
import { Container } from './styles';
const Home = () => {

  return (
    <Container>
      <Header/>
     <TopTracksContainer />
    </Container>
  );
};

export default Home;
