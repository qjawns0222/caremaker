import { da } from "../../type";
import { LoginData } from "../types/state";
import {
  Delete,
  Increase,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from "./actionTypes";

export const dataadd = (payload: da | undefined) => {
  return {
    type: Increase,
    payload,
  };
};
export const datadel = (payload: String | undefined) => {
  return {
    type: Delete,
    payload,
  };
};
export const LOGIN = (payload: LoginData | undefined) => {
  return {
    type: LOGIN_PENDING,
    payload,
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
