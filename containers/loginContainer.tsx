import { NextPage } from "next";
import Login from "../components/login";
import { js } from "../type";

const loginContainer = ({ data }: { data: js }) => {
  const name = "권범준";
  return (
    <div>
      <Login name={name} data={data} />
    </div>
  );
};
export default loginContainer;
