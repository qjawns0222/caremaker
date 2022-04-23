import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavContainer from "../containers/navcontainer";

import { wrapper } from "../store";
import { RootState } from "../store/reducers";
const App = ({ Component, pageProps }: AppProps) => {
  const [data, Setdata] = useState();
  const dispatch = useDispatch();
  const { main } = useSelector((state: RootState) => state);

  return (
    <>
      <NavContainer />
      {main && <Component data={data} {...pageProps} />}

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
