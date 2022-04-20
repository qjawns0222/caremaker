import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import LoginContainer from "../containers/loginContainer";
import { js } from "../type";
const Login = ({ data, name }: { data: js; name: String }) => {
  const [api, setapi] = useState(data);
  useEffect(() => {
    setapi(data);
  }, [data]);
  console.log("api" + api.data.idx);
  return <div>{name}</div>;
};

export default Login;
