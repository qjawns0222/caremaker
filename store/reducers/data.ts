import axios from "axios";
import { useEffect } from "react";
import {
  Delete,
  Increase,
  Login_FAIL,
  Login_PENDING,
  Login_SUCCESS,
} from "../actions/actionTypes";
import { ActionProps, CounterState } from "../types/state";

export const initialState: CounterState = {
  data: [
    {
      idx: "1",
      currentform: "first",
      maker: "admin",
      text: {
        title: "노래방",
        date: "2022.04.17",
        time: "12.14",
        address: "경북 구미시",
        content: "노래방 ㄱㄱ",
        tags: ["놀자", "놀자", "놀자"],
      },
    },
    {
      idx: "2",
      currentform: "first",
      maker: "admin",
      text: {
        title: "노래방",
        date: "2022.04.17",
        time: "12.14",
        address: "경북 구미시",
        content: "노래방 ㄱㄱ",
        tags: ["놀자", "놀자", "놀자"],
      },
    },
  ],
  common: {
    login: "admin",
  },
};

const Main = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case Increase:
      return { ...state, data: [...state.data, action.payload] };
    case Delete:
      state.data = state.data.filter((state) => {
        if (state.idx != action.payload) {
          return state;
        }
      });
      return { ...state };
    case Login_PENDING:
      console.log("pendig");
      console.log(action.payload);
      return state;
    case Login_SUCCESS:
      console.log("success");
      console.log(action.payload);
      return state;
    case Login_FAIL:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default Main;
export type mainState = ReturnType<typeof Main>;
