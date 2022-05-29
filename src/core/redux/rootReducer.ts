import { combineReducers } from "redux";

import ratesDataSlice from "../redux/currencies/currenciesSlice";

import convertDataSlice from "../redux/converter/convertSlice";

export const rootReducer = combineReducers({
  rates: ratesDataSlice,
  convert: convertDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
