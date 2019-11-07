import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  return (
    <div id="app">
      <Header />
      <Timer />
    </div>
  );
}

export default App;
