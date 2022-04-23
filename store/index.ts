import {
  applyMiddleware,
  createStore,
  EmptyObject,
  Middleware,
  Store,
  StoreEnhancer,
} from "redux";
import reducers from "./reducers";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import { mainState } from "./reducers/data";
import { ActionProps, CounterState } from "./types/state";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makestore: MakeStore<
  Store<
    {
      main: CounterState;
    },
    ActionProps
  >
> = () => {
  const store = createStore(reducers, {}, bindMiddleware([]));

  return store;
};

export const wrapper = createWrapper<
  Store<
    {
      main: CounterState;
    },
    ActionProps
  >
>(makestore, { debug: true });
