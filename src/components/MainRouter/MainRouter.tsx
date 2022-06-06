import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { Converter } from "../Converter/Converter";
import { Currencies } from "../Currencies/Currencies";

export const MainRouter = () => {
  return (
    <div>
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
