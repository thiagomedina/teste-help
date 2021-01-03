import React, { useState } from 'react';
import { Form } from './styles.js';
import { FiSearch } from 'react-icons/fi';

import { Creators as MusicActions } from '../../store/ducks/Music';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState();

  const handleSend = e => {
    e.preventDefault();
    if (query) {
      dispatch(MusicActions.search({ query }));
    }
  };

  return (
    <Form onSubmit={e => handleSend(e)}>
      <input
        placeholder="Pesquisar..."
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">
        <FiSearch />
      </button>
    </Form>
  );
};

export default Search;
