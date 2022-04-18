import { GetStaticProps, NextPage } from "next";
import axios from "axios";

const login: NextPage = () => {
  const posts = axios
    .get(
      "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-6%EC%9D%BC%EC%B0%A8/carddata.json"
    )
    .then((res) => {
      const posts = res;
      console.log(res.data);
      return res.data;
    });

  return <div>login:component</div>;
};
export default login;

export const getStaticProps: GetStaticProps = () => {
  // api를 통해 받은 data 정보

  return {
    props: {
      posts,
    },
    // page component의 props로 전달되는 객체
  };
};
