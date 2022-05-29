import { call, put, takeLatest, all } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";

import webApi from "../../services/webApi";
import {
  fetchConvert,
  fetchConvertError,
  fetchConvertSuccess,
} from "../converter/convertSlice";

type ConvertParams = {
  payload: { amount: string; from: string; to: string };
};

function* getConvert({ payload }: ConvertParams) {
  try {
    //@ts-ignore
    const { data } = yield call(webApi.convert, payload);

    yield put(fetchConvertSuccess(data));
  } catch (error) {
    yield put(fetchConvertError(JSON.stringify(error)));
  }
}

export function* sagaConvert() {
  yield all([takeLatest<any>(fetchConvert, getConvert)]);
}
