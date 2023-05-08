// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App/App";
// import { BrowserRouter as Router } from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Canvas>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </Canvas>
  </React.StrictMode>
);
