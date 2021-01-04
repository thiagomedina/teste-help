import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { Creators as MusicActions } from '../../store/ducks/Music';


import { FiStar } from 'react-icons/fi';
import { BsFillStarFill } from 'react-icons/bs';

import { FavoritesButton } from './styles';

const FavoriteButton = ({ track }) => {
  const [save, setSave] = useState(false);
  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(MusicActions.addFavorites({ track }));
    setSave(!save);
  };

  return (
    <FavoritesButton onClick={handleSave}>
      {save ? <BsFillStarFill /> : <FiStar />}
    </FavoritesButton>
  );
};

export default FavoriteButton;
