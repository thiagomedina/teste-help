import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Favorites from '../pages/Favorites';
import Home from '../pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/favorites" exact component={Favorites} />
    </BrowserRouter>
  );
}

export default Routes;
