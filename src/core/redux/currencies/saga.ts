import { call, put, takeLatest, all } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";

import webApi from "../../services/webApi";
import {
  fetchRates,
  fetchRatesError,
  fetchRatesSuccess,
} from "../currencies/currenciesSlice";

// const call: any = Effects.call;

function* getCurrencies() {
  try {
    //@ts-ignore
    const { data } = yield call(webApi.getRates);

    yield put(fetchRatesSuccess(data));
  } catch (error) {
    yield put(fetchRatesError(JSON.stringify(error)));
  }
}

export function* sagaCurrencies() {
  yield all([takeLatest<any>(fetchRates, getCurrencies)]);
}
