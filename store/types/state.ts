import { da } from "../../type";

export interface ActionProps {
  type: string;
  payload: da | string | null;
}

export interface CounterState {
  data: Array<da>;
  common: { login: String };
}

export type RootState = {
  main: CounterState;
};
