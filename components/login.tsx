import { NextPage } from "next";
import axios from "axios";

const login: NextPage = (posts) => {
  console.log(posts);
  return <div>login:component</div>;
};
export default login;

export async function getStaticProps() {
  // api를 통해 받은 data 정보
  const res = axios.get(
    "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-6%EC%9D%BC%EC%B0%A8/carddata.json"
  );

  return {
    props: {
      res,
    },
    // page component의 props로 전달되는 객체
  };
}
