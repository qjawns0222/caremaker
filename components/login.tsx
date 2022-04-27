import { RefObject } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CounterState, RootState } from "../store/types/state";

const Login = ({
  idref,
  passwordref,
  login,
}: {
  idref: RefObject<HTMLInputElement>;
  passwordref: RefObject<HTMLInputElement>;
  login: () => void;
}) => {
  return (
    <div>
      <div className="section">
        <div className="inputboxs">
          <div className="title">로그인 해주세요</div>
          <div className="idbox">
            <div className="title">아이디:</div>
            <input ref={idref} className="id" />
          </div>
          <div className="passwordbox">
            <div className="title">비밀번호:</div>
            <input ref={passwordref} className="password" type="password" />
          </div>
          <div className="buttons">
            <button onClick={login} className="login">
              로그인
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section {
            height: 850px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: yellow;
          }
          .inputboxs {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 40%;
            min-width: 30%;
            max-width: 100%;
            background-color: #1afff3;
            border: 4px solid #1afff3;
            border-radius: 10px;
          }
          .inputboxs > .title {
            height: 20%;
            color: #c24889;
            font-size: 28px;
            font-weight: bolder;
          }
          .inputboxs > .idbox,
          .passwordbox {
            display: flex;
            justify-content: center;
            margin: 1%;
            width: 100%;
          }
          .inputboxs > .idbox,
          .passwordbox > .title {
            font-size: 18px;
            font-weight: bolder;
          }
          .inputboxs > .idbox > .title {
            padding-left: 18px;
          }
          .inputboxs > .buttons {
            display: flex;
            width: 90%;
            justify-content: flex-end;
            font-size: 28px;
            font-weight: bolder;
          }
          .inputboxs > .buttons > .login {
            font-size: 18px;
            font-weight: bolder;
            padding: 2%;
            background-color: #6856f8;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
