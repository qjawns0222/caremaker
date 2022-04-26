import axios from "axios";
import { useEffect } from "react";
import { Delete, Increase } from "../actions/actionTypes";
import { ActionProps, CounterState } from "../types/state";

const initialState: CounterState = {
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
        console.log(state.idx != action.payload);
        if (state.idx != action.payload) {
          return state;
        }
      });
      console.log(state);
      return { ...state };
    default:
      return state;
  }
};

export default Main;
export type mainState = ReturnType<typeof Main>;
