import React from "react";
import "./App.css";
import { MainRouter } from "./components/MainRouter";

export const App = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <MainRouter />
    </div>
  );
};
