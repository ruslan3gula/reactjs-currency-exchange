import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Rates, RatesData } from "../../interfaces/currency-interface";

const initialState: RatesData = {
  isLoading: false,
  error: null,
  ratesData: { lastUpdate: "", base: "", rates: {} },
};

const ratesDataSlice = createSlice({
  name: "ratesDataReducer",
  initialState,
  reducers: {
    fetchRates: (state: RatesData) => {
      state.isLoading = true;
    },
    fetchRatesSuccess: (state: RatesData, action: PayloadAction<Rates>) => {
      state.isLoading = false;
      state.ratesData = action.payload;
    },
    fetchRatesError: (
      state: RatesData,
      action: PayloadAction<string | null>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ratesDataSlice.reducer;

export const { fetchRates, fetchRatesSuccess, fetchRatesError } =
  ratesDataSlice.actions;
