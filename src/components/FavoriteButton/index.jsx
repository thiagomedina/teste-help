import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as MusicActions } from '../../store/ducks/Music';

import { FiStar } from 'react-icons/fi';
import { BsFillStarFill } from 'react-icons/bs';

import { FavoritesButton } from './styles';

const FavoriteButton = ({ track }) => {
  const [save, setSave] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.Music.favorites);

  const handleSave = () => {
    setSave(!save);
    favorites.find(trackSaved => trackSaved.track.id === track.id)
      ? dispatch(MusicActions.removeFavorites(track.id))
      : dispatch(MusicActions.addFavorites({ track }));
  };

  return (
    <FavoritesButton onClick={handleSave}>
      {save ? <BsFillStarFill /> : <FiStar />}
    </FavoritesButton>
  );
};

export default FavoriteButton;
