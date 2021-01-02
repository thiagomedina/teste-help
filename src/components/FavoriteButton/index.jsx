import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { BsFillStarFill } from 'react-icons/bs';

import { FavoritesButton } from './styles';

const FavoriteButton = ({ track }) => {
  const [save, setSave] = useState(false);
  const handleSave = () => {
    setSave(!save);
  };

  return (
    <FavoritesButton onClick={handleSave}>
      {save ? <BsFillStarFill /> : <FiStar />}
    </FavoritesButton>
  );
};

export default FavoriteButton;
