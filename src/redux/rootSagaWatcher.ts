import { fork } from "redux-saga/effects";
import { sagaCurrenciesWatcher } from "./currencies/saga";
import { sagaConvertWatcher } from "./converter/saga";

export function* rootSaga() {
  yield fork(sagaCurrenciesWatcher);
  yield fork(sagaConvertWatcher);
}
