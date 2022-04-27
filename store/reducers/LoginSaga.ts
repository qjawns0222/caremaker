import { takeLatest } from "redux-saga/effects";
import { Login_PENDING } from "../actions/actionTypes";
import { ActionProps } from "../types/state";
export function* checklogin(action: ActionProps) {
  console.log(action);
}
export default function* watchLogin() {
  yield takeLatest(Login_PENDING, checklogin);
}
