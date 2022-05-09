import { NextRouter } from "next/router";
import { da } from "../../type";
import { LoginData } from "../types/state";
import {
  Delete,
  Increase,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT,
  Update,
} from "./actionTypes";

export const dataadd = (payload: da | undefined) => {
  return {
    type: Increase,
    payload,
  };
};
export const datadel = (payload: String) => {
  return {
    type: Delete,
    payload,
  };
};
export const dataupdate = (payload: da) => {
  return {
    type: Update,
    payload,
  };
};
export const LOGIN = (payload: LoginData | undefined, router: NextRouter) => {
  return {
    type: LOGIN_PENDING,
    payload,
    router,
  };
};
export const LOGINSUCCESS = (payload: LoginData) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const LOGINFAIL = () => {
  return {
    type: LOGIN_FAIL,
  };
};
export const reset = () => {
  return {
    type: LOGOUT,
  };
};
