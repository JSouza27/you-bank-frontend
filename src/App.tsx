import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/css/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        hello word
      </div>
    </BrowserRouter>
  );
};

export default App;
