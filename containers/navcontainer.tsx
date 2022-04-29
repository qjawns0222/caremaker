import { NextPage } from "next";
import { useDispatch } from "react-redux";
import Nav from "../components/nav";
import { reset } from "../store/actions/action";
const Navcontainer: NextPage = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(reset());
  };
  return <Nav logout={logout} />;
};

export default Navcontainer;
