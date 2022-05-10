import axios from "axios";
import { resolveSoa } from "dns";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import MypageContainer from "../containers/mypageContainer";
import { js } from "../type";
const MyPage = () => {
  return (
    <div>
      <MypageContainer />
    </div>
  );
};

export default MyPage;
