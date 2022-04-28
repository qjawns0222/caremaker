import axios from "axios";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavContainer from "../containers/navcontainer";

import { wrapper } from "../store";
import { LOGIN } from "../store/actions/action";
import { RootState } from "../store/reducers";
import { CounterState } from "../store/types/state";
const App = ({ Component, pageProps }: AppProps) => {
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  useEffect(() => {
    console.log(main);
  }, [main]);
  return (
    <>
      <NavContainer />
      <Component {...pageProps} />

      <style jsx global>
        {`
          * {
            text-decoration: none;
            margin: 0px;
            padding: 0px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default wrapper.withRedux(App);
