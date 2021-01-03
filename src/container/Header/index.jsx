import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Search from '../../components/Search';
import { Container, Favorites } from './styles';

const Header = () => {
  return (
    <Container>
      <Search />
      <Favorites>
        <Link to='/favorites'>
          Sua Biblioteca
          <FiArchive />
        </Link>
      </Favorites>
    </Container>
  );
};

export default Header;
