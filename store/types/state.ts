import { da } from "../../type";

export interface ActionProps {
  type: string;
  payload: da | null;
}

export interface CounterState {
  data: Array<da>;
  common: { login: String };
}

export type RootState = {
  main: CounterState;
};
