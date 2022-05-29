import React, { useEffect, useState } from "react";

import "./Converter.css";
import { useTypedSelector } from "../core/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import axios from "axios";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { currencies } from "../core/constants/currenciesArray";

export const Converter = () => {
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [result, setResult] = useState();

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({amount,to,from});
  // }, []);

  const handleChangeFrom = (event: SelectChangeEvent) => {
    setFrom(event.target.value as string);
  };
  const handleChangeTo = (event: SelectChangeEvent) => {
    setTo(event.target.value as string);
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://v1.nocodeapi.com/ruslan3gula/cx/TagsSjLltDAcrHCx/rates/convert?",
  //       { params: { amount, from, to } }
  //     )
  //     .then((res) => console.log(res));
  // }, []);

  const convert = async () => {
    const result = await axios
      .get(
        "https://v1.nocodeapi.com/ruslan3gula/cx/TagsSjLltDAcrHCx/rates/convert?",
        { params: { amount, from, to } }
      )
      .then((res) => setResult(res.data.result.toFixed(2)));
  };

  return (
    <div className="currency_container">
      <div className="currency_display">
        <p className="currency_plain_text">
          {amount} {from} дорівнює
        </p>
        <p className="currency_value">
          {result}
          <span className="result_currency"> {to}</span>
        </p>
        <p className="currency_date">23 трав., 19:05 UTC </p>
      </div>
      <div className="currency_input">
        <input
          type="text"
          className="currency_1"
          placeholder="base currency"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">FROM</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={from}
              label="Age"
              onChange={handleChangeFrom}
            >
              {currencies.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">TO</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={to}
              label="Age"
              onChange={handleChangeTo}
            >
              {currencies.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" onClick={convert}>
          Convert
        </Button>
      </div>
    </div>
  );
};
