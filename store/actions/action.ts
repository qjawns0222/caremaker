import { da } from "../../type";
import { Increase } from "./actionTypes";

export const dataadd = (payload: da | undefined) => {
  return {
    type: Increase,
    payload,
  };
};
