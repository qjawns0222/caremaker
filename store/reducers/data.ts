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
        tags: "[놀자,놀자,놀자]",
      },
    },
  ],
  common: {
    login: "",
  },
};

const main = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case "increase":
      return { ...state, login: "admin" };
    default:
      return state;
  }
};

export default main;
