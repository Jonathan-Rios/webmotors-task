import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/Main/App';

import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
