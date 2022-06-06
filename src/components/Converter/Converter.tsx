import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { currencies } from "../../core/constants/currenciesArray";
import { fetchConvert } from "../../core/redux/converter/convertSlice";
import { useTypedSelector } from "../../core/hooks/useTypedSelector";
import { CurrencyContainer } from "../styled/Converter.styled";
import {
  CurrencyDisplay,
  CurrencyInput,
  CurrencyValue,
  Currency1,
  CurrencyPlainText,
} from "../styled/Converter.styled";

import { Spinner } from "../../core/others/Spinner";

export const Converter = () => {
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  const conversionResult = useTypedSelector(
    (state) => state.convert.convertData
  );

  const conversionTime = useTypedSelector(
    (state) => state.convert.convertData.data.info.time
  );

  const isLoading = useTypedSelector((state) => state.convert.isLoading);

  const dispatch = useDispatch();

  const convertViaRedux = () => {
    dispatch(fetchConvert({ amount, to, from }));
  };

  const handleChangeFrom = (event: SelectChangeEvent) => {
    setFrom(event.target.value as string);
  };
  const handleChangeTo = (event: SelectChangeEvent) => {
    setTo(event.target.value as string);
  };

  return (
    <div>
      {isLoading ? (
        <div style={{ margin: "0 auto", width: "500px" }}>
          <Spinner />
        </div>
      ) : (
        <CurrencyContainer>
          <CurrencyDisplay>
            <CurrencyPlainText>
              {amount} {from} дорівнює
            </CurrencyPlainText>
            <CurrencyValue>
              {Number(conversionResult.data?.result).toFixed(2)}
              <span className="result_currency"> {to}</span>
            </CurrencyValue>
            <p className="currency_date">{conversionTime && conversionTime}</p>
          </CurrencyDisplay>
          <CurrencyInput>
            <Currency1
              type="text"
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
                  {currencies.map((item: any) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" onClick={convertViaRedux}>
              Convert
            </Button>
          </CurrencyInput>
        </CurrencyContainer>
      )}
    </div>
  );
};
