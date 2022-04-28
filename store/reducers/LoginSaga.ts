import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_PENDING, LOGIN_SUCCESS } from "../actions/actionTypes";
import { LoginData, LoginJson } from "../types/state";

const checkdata = async () => {
  const res = await axios.get(
    "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-15%EC%9D%BC%EC%B0%A8-Saga-login/login.json"
  );
  console.log(res);

  return res.data;
};
function* checklogin({ type, payload }: { type: String; payload: LoginData }) {
  try {
    const data: LoginJson = yield call(checkdata);
    data.login.find((res: LoginData) => {
      if (res.id == payload.id && res.password == payload.password) {
        payload.id = res.id;
        payload.password = "true";
        console.log(res.id == payload.id);
        return res;
      }
    });
    console.log(payload.password);
    yield put({ type: LOGIN_SUCCESS, payload });
  } catch (e) {
    console.log(e);
  }
}
export default function* watchLogin() {
  yield takeLatest(LOGIN_PENDING, checklogin);
}
