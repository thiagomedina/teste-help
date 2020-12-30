import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './pages/Home';
import store from './store';

function Routes() {
  return (

    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>

  );
}

export default Routes;
