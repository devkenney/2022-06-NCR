import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter } from "react-router-dom";

//Wrap the App Component with the Router component to enable the router features
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);