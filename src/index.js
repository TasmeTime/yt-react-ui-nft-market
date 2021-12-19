import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import Colors from "./assets/Colors";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${Colors.Secondary}
  }

*{
  padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;
}

a{
  text-decoration: none;
}

a:visisted{
  color: #070710;
}
   
`;

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
