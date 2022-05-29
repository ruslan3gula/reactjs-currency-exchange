import { fork } from "redux-saga/effects";
import { sagaCurrencies } from "../redux/currencies/saga";
import { sagaConvert } from "../redux/converter/saga";

export function* rootSaga() {
  yield fork(sagaCurrencies);
  yield fork(sagaConvert);
}
