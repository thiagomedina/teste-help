import React from 'react';
import Routes from './config/routes';
import { Provider } from 'react-redux';
import store from './store/index';
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
