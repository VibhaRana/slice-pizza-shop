import React from 'react';
import { createGlobalStyle } from 'styled-components'
import './App.css';
import {Navbar} from './Navbar/Navbar'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`



function App() {
  return (
    
    <div className="App">
      <> 
      <GlobalStyle />
      <Navbar />
   <div>Hello Sliceline</div>
      </>
    </div>
   
  );
}

export default App;
