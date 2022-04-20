import axios from "axios";
import { resolveSoa } from "dns";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import MypageContainer from "../containers/mypageContainer";
import { js } from "../type";
const MyPage = ({ data }: { data: js }) => {
  console.log("post" + data.common.login);
  return (
    <div>
      {data.common.login}
      <MypageContainer />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const data1 = await fetch(
    "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-6%EC%9D%BC%EC%B0%A8/carddata.json"
  );
  console.log(data1);
  const data = await data1.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default MyPage;
