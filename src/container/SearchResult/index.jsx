import React from 'react';
import { useSelector } from 'react-redux';

import CardTracks from '../../components/CardTracks';
import CardAlbum from '../../components/CardAlbum';

const SearchResult = () => {
  const { album, artist, track } = useSelector(
    state => state.Music.searchResult,
  );

  const Tracks = () => {
    return (
      <>
        <h1>Músicas</h1>
        {track && track?.map(item => <CardTracks key={item.id} song={item} />)}
      </>
    );
  };

  return (
    <>
      <Tracks />
      {console.log(album, artist)}
    </>
  );
};

export default SearchResult;
