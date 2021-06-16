import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { modeContext } from './components/contexts/ModeContext'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { createGlobalStyle } from 'styled-components';
import CountriesProvider from './components/contexts/CountriesComtext/CountriesContext'
import Details from './Pages/Details/Details'

const GlobalStyles = createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({isLight})=> isLight? " hsl(0, 0%, 98%) ": "hsl(207, 26%, 17%)"};
  }
`

function App() {
  const {isLight} = useContext(modeContext)
  return (
    <div >
    <BrowserRouter>
      <CountriesProvider>
          <GlobalStyles isLight={isLight} />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countries/:nativeName" component={Details} />
          </Switch>
      </CountriesProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
