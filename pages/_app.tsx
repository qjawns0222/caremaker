import { NextComponentType } from "next";
import { AppProps } from "next/app";
import NavContainer from "../containers/navcontainer";
import Image from "next/image";

const App = ({ Component, pageProps }: AppProps) => {
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
export default App;
