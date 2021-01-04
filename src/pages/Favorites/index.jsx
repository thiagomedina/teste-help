import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

import { Header } from './styles';
const Favorites = () => {
  const f = useSelector(state => state.Music);
  return (
    <>
      <Header>
        {console.log(f)}
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </Header>
    </>
  );
};
export default Favorites;
