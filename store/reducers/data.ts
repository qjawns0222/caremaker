import axios from "axios";
import { useEffect } from "react";
import data from ".";
import { da } from "../../type";
import {
  Delete,
  Increase,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT,
  Update,
} from "../actions/actionTypes";
import { ActionProps, CounterState, LoginData } from "../types/state";

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
    case LOGIN_PENDING:
      return { ...state };
    case LOGIN_SUCCESS:
      state.common.login = (<LoginData>action.payload).id;
      return { ...state };
    case LOGIN_FAIL:
      console.log("로그인 실패");
      alert("로그인 실패");
      return { ...state };
    case LOGOUT:
      console.log("로그아웃");
      return { ...state, common: { login: "admin" } };
    case Update:
      state.data = <da[]>state.data.map((res) => {
        if (res.idx == (action.payload as da).idx) {
          return action.payload;
        }
        return res;
      });

      return state;
    default:
      return { ...state };
  }
};

export default Main;
export type mainState = ReturnType<typeof Main>;
