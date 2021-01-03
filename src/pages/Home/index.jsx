import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../container/Header';
import SearchResult from '../../container/SearchResult';
import Load from '../../components/Loading';
import TopTracks from '../../container/TopTracks';
import CardAlbum from '../../components/CardAlbum';

import { Container } from './styles';

const Home = () => {
  const searchResults = useSelector(state => state.Music.searchResult);
  const loading = useSelector(state => state.Music.loading);

  const obj = {
    artist: {
      id: 12807,
      link: 'https://www.deezer.com/artist/12807',
      name: 'O Rappa',
      picture: 'https://api.deezer.com/artist/12807/image',
      picture_big:
        'https://cdns-images.dzcdn.net/images/artist/9d51dd78f4d7dc40e225eab4aea24c15/500x500-000000-80-0-0.jpg',
      picture_medium:
        'https://cdns-images.dzcdn.net/images/artist/9d51dd78f4d7dc40e225eab4aea24c15/250x250-000000-80-0-0.jpg',
      picture_small:
        'https://cdns-images.dzcdn.net/images/artist/9d51dd78f4d7dc40e225eab4aea24c15/56x56-000000-80-0-0.jpg',
      picture_xl:
        'https://cdns-images.dzcdn.net/images/artist/9d51dd78f4d7dc40e225eab4aea24c15/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/12807/top?limit=50',
      type: 'artist',
    },
    cover: 'https://api.deezer.com/album/6584056/image',
    cover_big:
      'https://cdns-images.dzcdn.net/images/cover/5d52481a4a8db590a92681bf7bec7726/500x500-000000-80-0-0.jpg',
    cover_medium:
      'https://cdns-images.dzcdn.net/images/cover/5d52481a4a8db590a92681bf7bec7726/250x250-000000-80-0-0.jpg',
    cover_small:
      'https://cdns-images.dzcdn.net/images/cover/5d52481a4a8db590a92681bf7bec7726/56x56-000000-80-0-0.jpg',
    cover_xl:
      'https://cdns-images.dzcdn.net/images/cover/5d52481a4a8db590a92681bf7bec7726/1000x1000-000000-80-0-0.jpg',
    explicit_lyrics: false,
    genre_id: 75,
    id: 6584056,
    link: 'https://www.deezer.com/album/6584056',
    md5_image: '5d52481a4a8db590a92681bf7bec7726',
    nb_tracks: 13,
    record_type: 'album',
    title: 'Rappa-Mundi',
    tracklist: 'https://api.deezer.com/album/6584056/tracks',
    type: 'album',
  };
  return (
    <Container>
      <Header />
      {/* <CardAlbum album={obj} /> */}

      {
        {
          ['true']: <Load />,
          ['false']: !!searchResults.artist ? <SearchResult /> : <TopTracks />,
        }[loading]
      }
    </Container>
  );
};

export default Home;
