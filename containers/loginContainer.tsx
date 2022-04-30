import { useRouter } from "next/router";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/login";
import { LOGIN } from "../store/actions/action";
import { CounterState, LoginData, RootState } from "../store/types/state";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const idref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  const router = useRouter();
  const login = () => {
    if (idref.current?.value && passwordref.current?.value) {
      const logindata: LoginData = {
        id: idref.current!.value,
        password: passwordref.current!.value,
      };

      dispatch(LOGIN(logindata, router));
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
