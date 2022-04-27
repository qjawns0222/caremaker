import { useRef } from "react";
import { useDispatch } from "react-redux";
import Login from "../components/login";
import { LOGIN } from "../store/actions/action";
import { LoginData } from "../store/types/state";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const idref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const login = () => {
    if (idref.current?.value && passwordref.current?.value) {
      const logindata: LoginData = {
        id: idref.current!.value,
        password: passwordref.current!.value,
      };
      dispatch(LOGIN(logindata));
    } else {
      alert("아이디와 비밀번호를 모두 입력하세요");
    }
  };

  return (
    <div>
      <Login idref={idref} passwordref={passwordref} login={login} />
    </div>
  );
};
export default LoginContainer;
