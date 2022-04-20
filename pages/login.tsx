import { GetServerSideProps } from "next";
import LoginContainer from "../containers/loginContainer";
import { js } from "../type";

const Login = ({ data }: { data: js }) => {
  return (
    <div>
      <LoginContainer data={data} />
    </div>
  );
};

export default Login;
