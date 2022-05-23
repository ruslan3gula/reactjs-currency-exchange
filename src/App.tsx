import React from "react";

import "./App.css";

import { Converter } from "./components/Converter";
import { Currencies } from "./components/Currencies";

function App() {
  return (
    <div className="App">
      <Converter />
      <Currencies />
    </div>
  );
}

export default App;
