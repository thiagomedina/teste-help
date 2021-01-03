import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header } from './styles';
const Favorites = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </Header>
    </>
  );
};
export default Favorites;
