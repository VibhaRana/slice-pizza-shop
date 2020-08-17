import React from 'react';
import { createGlobalStyle } from 'styled-components'
import './App.css';

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
     <h1>Sliceline</h1>
      </>
    </div>
   
  );
}

export default App;
