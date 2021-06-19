import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ModeContextProvider from './components/contexts/ModeContext'

ReactDOM.render(
  <ModeContextProvider>
    <App />
  </ModeContextProvider>,
  document.getElementById('root')
);
