import React from 'react';
import { Form } from './styles.js';
import { FiSearch } from 'react-icons/fi';
const Search = () => {
  return (
    <Form>
      <input placeholder="Pesquisar..." />
      <button type="submit">
        <FiSearch />
      </button>
    </Form>
  );
};

export default Search;
