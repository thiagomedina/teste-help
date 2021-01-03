import React from 'react';
import { FiArchive } from 'react-icons/fi';

import Search from '../../components/Search';
import { Container, Favorites } from './styles';

const Header = () => {
  return (
    <Container>
      <Search />
      <Favorites>
        Sua Biblioteca
        <FiArchive />
      </Favorites>
    </Container>
  );
};

export default Header;
