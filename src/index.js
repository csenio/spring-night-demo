import React from "react";
import ReactDOM from "react-dom";
import Gesture from "./Gesture";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Catamaran');
  *{
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: 'Catamaran', serif;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Gesture />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
