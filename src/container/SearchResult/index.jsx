import React from 'react';
import { useSelector } from 'react-redux';

import CardTracks from '../../components/CardTracks';
import CardAlbum from '../../components/CardAlbum';

import { ContainerAlbums } from './styles';

const SearchResult = () => {
  const { album, track } = useSelector(state => state.Music.searchResult);

  const Tracks = () => {
    return (
      <>
        <h1>Músicas</h1>
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
      <Tracks />
      <h1>Albuns</h1>
      <ContainerAlbums>
        <Albums />
      </ContainerAlbums>
      {console.log(album)}
    </>
  );
};

export default SearchResult;
