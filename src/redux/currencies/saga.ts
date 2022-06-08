import { call, put, takeLatest, all } from "redux-saga/effects";

import webApi from "../store/services/webApi";
import {
  fetchRates,
  fetchRatesError,
  fetchRatesSuccess,
} from "./currenciesSlice";

function* getCurrenciesWorker() {
  try {
    //@ts-ignore
    const { data } = yield call(webApi.getRates);

    yield put(fetchRatesSuccess(data));
  } catch (error) {
    yield put(fetchRatesError(JSON.stringify(error)));
  }
}

export function* sagaCurrenciesWatcher() {
  yield all([takeLatest<any>(fetchRates, getCurrenciesWorker)]);
}
