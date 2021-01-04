import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CardTracks from '../../components/CardTracks';
import { Container } from './styles';
import { Header } from './styles';
const Favorites = () => {
  const favorites = useSelector(state => state.Music.favorites);
  return (
    <>
      <Header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </Header>
      <Container>
        <h1>Favoritas</h1>
        {favorites?.map(item => (
          <CardTracks key={item.track.id} song={item.track} />
        ))}
      </Container>
    </>
  );
};
export default Favorites;
