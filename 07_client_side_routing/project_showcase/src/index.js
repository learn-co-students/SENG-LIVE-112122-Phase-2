// Deliverable 1: Install and setup react router

  // - React Router has been updated to V6 but V5 is used in the curriculum.

  // - To install V5 run this command: `npm install react-router-dom@5.3.0` 
  // otherwise, V6 will install by default

  // - Wrap the `App` component inside of the `BrowserRouter` component 
  // that will be imported from the `react-router-dom` library

  import React from "react";
  import ReactDOM from "react-dom";
  import "./index.css";
  
  // Router => Alias for BrowserRouter
  import { BrowserRouter as Router } from "react-router-dom";
  
  import App from "./App";
  
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
  