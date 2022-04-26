import { da } from "../../type";
import { Delete, Increase } from "./actionTypes";

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
