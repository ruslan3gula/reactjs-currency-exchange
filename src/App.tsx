import React from "react";

import "./App.css";

import { Converter } from "./components/Converter";
import { Currencies } from "./components/Currencies";
import { BaseCurrency } from "./components/BaseCurrency";

function App() {
  return (
    <div className="App">
      <BaseCurrency />
      <Converter />
      <Currencies />
    </div>
  );
}

export default App;
