import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// ReactDOM.render(
//  What We Want to Render,
//  Where We Want to Render It
// )

ReactDOM.render(
  <React.StrictMode>
    
    {/* Russian Doll => App is Outermost Layer */}
    
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
