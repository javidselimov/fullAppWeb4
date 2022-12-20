import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import { createGlobalStyle } from "styled-components";
import Createlist from "./pages/Createlist";

import store from "./state/store.js";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/createlist" element={<Createlist />} />
      </Routes>

  </BrowserRouter>
);
