import { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Nav from "../components/nav";
import { reset } from "../store/actions/action";
const Navcontainer: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = () => {
    dispatch(reset());
    router.push("/login");
  };
  return <Nav logout={logout} />;
};

export default Navcontainer;
