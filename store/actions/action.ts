import { da } from "../../type";
import { LoginData } from "../types/state";
import {
  Delete,
  Increase,
  Login_FAIL,
  Login_PENDING,
  Login_SUCCESS,
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
    type: Login_PENDING,
    payload,
  };
};
export const LOGINSUCCESS = (payload: String | undefined) => {
  return {
    type: Login_SUCCESS,
    payload,
  };
};
export const LOGINFAIL = (payload: String | undefined) => {
  return {
    type: Login_FAIL,
    payload,
  };
};
