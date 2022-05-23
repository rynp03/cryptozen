import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cryptocontext from "./Cryptocontext";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <Cryptocontext>
    <App />
  </Cryptocontext>,
  document.getElementById("root")
);
