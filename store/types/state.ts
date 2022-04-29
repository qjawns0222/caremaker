import { da } from "../../type";

export interface ActionProps {
  type: string;
  payload: da | string | LoginData;
}

export interface CounterState {
  data: Array<da>;
  common: { login: string };
}

export type RootState = {
  main: CounterState;
};
export type LoginData = {
  id: string;
  password: string;
};
export type LoginJson = {
  login: LoginData[];
};
export type inputlogin = {
  login: String;
};
