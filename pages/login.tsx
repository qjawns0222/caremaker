import type { GetServerSideProps, NextPage } from "next";
import LoginContainer from "../containers/loginContainer";
const Login = ({ data }: { data: Object }) => {
  return (
    <div>
      <LoginContainer />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const data1 = await fetch(
    "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-6%EC%9D%BC%EC%B0%A8/carddata.json"
  );
  const data = await data1.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Login;
