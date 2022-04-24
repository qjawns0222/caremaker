import { GetServerSideProps } from "next";
import LoginContainer from "../containers/loginContainer";
import { js } from "../type";

const Login = () => {
  return (
    <div>
      <LoginContainer />
    </div>
  );
};

export default Login;
