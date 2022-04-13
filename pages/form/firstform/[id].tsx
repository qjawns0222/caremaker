import { GetServerSideProps, NextPage } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { NextComponentType } from "next";
import FirstidContainer from "../../../containers/form/firstform/id";
const firstid = ({ id }: { id: String }) => {
  console.log(id);
  return (
    <div>
      <FirstidContainer />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id: String = params!.id as String;
  return {
    props: {
      id,
    },
  };
};
export default firstid;
