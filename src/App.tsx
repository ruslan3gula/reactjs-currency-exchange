import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import "./App.css";

import { Converter } from "./components/Converter";
import { Currencies } from "./components/Currencies/Currencies";

export const App = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{ width: "100%" }}>
          <Link className="link converter" to="converter">
            converter
          </Link>
          <Link className="link currencies" to="currencies">
            currencies
          </Link>
        </Box>

        <Routes>
          <Route path="converter" element={<Converter />} />
          <Route path="currencies" element={<Currencies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
