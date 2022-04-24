import { da } from "../../type";

export interface ActionProps {
  type: string;
}

export interface CounterState {
  data: Array<da>;
  common: { login: String };
}

export type RootState = {
  main: CounterState;
};
