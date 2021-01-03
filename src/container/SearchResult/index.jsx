import React from 'react';
import { useSelector } from 'react-redux';

import CardTracks from '../../components/CardTracks';
import CardAlbum from '../../components/CardAlbum';

import { ContentAlbums } from './styles';

const SearchResult = () => {
  const { album, track } = useSelector(state => state.Music.searchResult);

  const Tracks = () => {
    return (
      <>
        {track?.map(item => (
          <CardTracks key={item.id} song={item} />
        ))}
      </>
    );
  };

  const Albums = () => {
    return (
      <>
        {album?.map(item => (
          <CardAlbum key={item.id} album={item} />
        ))}
      </>
    );
  };

  return (
    <>
      <h1>Músicas</h1>
      <Tracks />
      <h1>Álbuns</h1>
      <ContentAlbums>
        <Albums />
      </ContentAlbums>
    </>
  );
};

export default SearchResult;
