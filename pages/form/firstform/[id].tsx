import { GetServerSideProps, NextPage } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { NextComponentType } from "next";
import FirstidContainer from "../../../containers/form/firstform/id";
const firstid = () => {
  return (
    <div>
      <FirstidContainer />
    </div>
  );
};

export default firstid;
