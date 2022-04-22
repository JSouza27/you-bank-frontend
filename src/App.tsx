import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';
import PublicRoutes from './routes/PublicRoute';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default App;
