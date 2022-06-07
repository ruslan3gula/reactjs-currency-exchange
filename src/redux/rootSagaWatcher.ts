import { fork } from "redux-saga/effects";
import { sagaCurrencies } from "./currencies/sagaWorker";
import { sagaConvert } from "./converter/sagaWorker";

export function* rootSaga() {
  yield fork(sagaCurrencies);
  yield fork(sagaConvert);
}
