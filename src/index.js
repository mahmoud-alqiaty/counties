import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import ModeContextProvider from './components/contexts/ModeContext'

ReactDOM.render(
  <ModeContextProvider>
    <App />
  </ModeContextProvider>,
  document.getElementById('root')
);
