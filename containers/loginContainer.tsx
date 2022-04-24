import { NextPage } from "next";
import Login from "../components/login";
import { js } from "../type";

const loginContainer = () => {
  const name: String = "권범준";
  return (
    <div>
      <Login name={name} />
    </div>
  );
};
export default loginContainer;
