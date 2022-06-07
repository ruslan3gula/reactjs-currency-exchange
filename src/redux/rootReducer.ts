import { combineReducers } from "redux";

import ratesDataSlice from "./currencies/currenciesSlice";

import convertDataSlice from "./converter/convertSlice";

export const rootReducer = combineReducers({
  rates: ratesDataSlice,
  convert: convertDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
