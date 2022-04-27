import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
