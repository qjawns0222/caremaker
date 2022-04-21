import axios from "axios";
import { GetServerSideProps } from "next";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import NavContainer from "../containers/navcontainer";
import num from "../data";
const App = ({ Component, pageProps }: AppProps) => {
  const [data, Setdata] = useState();
  useEffect(() => {
    try {
      axios
        .get(
          "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-6%EC%9D%BC%EC%B0%A8/carddata.json"
        )
        .then((res) => {
          Setdata(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <NavContainer />
      {data && <Component data={data} {...pageProps} />}

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

export default App;
