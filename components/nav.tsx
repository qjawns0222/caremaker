import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { CounterState, RootState } from "../store/types/state";

const Nav: NextPage = () => {
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  return (
    <div className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <Image
              src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
              alt="logo"
              width="70px"
              height="70px"
            />
          </a>
        </Link>
      </div>
      <div className="navbar">
        <div className="home">
          <Link href="/">
            <a>메인화면</a>
          </Link>
        </div>
        <div className="card">
          <Link href="/form">
            <a>카드 고르기</a>
          </Link>
        </div>
        <div className="mypage">
          <Link href="/mypage">
            <a>마이페이지</a>
          </Link>
        </div>
      </div>
      <div className="loginbar">
        <div className="login">
          <Link href="/login">
            <a>{-1 > 0 ? "로그인" : main.common.login}</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            background: linear-gradient(
              to left,
              rgb(251, 211, 233),
              rgb(187, 55, 125)
            );
            display: flex;
            justify-content: space-around;
          }
          .header > .logo {
            width: 10%;
            display: flex;
            justify-content: center;
          }
          .header > .navbar {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .header > .navbar > * {
            margin: 15px;
            font-weight: bolder;
            font-size: 20px;
            color: royalblue;
          }
          .header > .loginbar {
            margin: 15px;
            font-weight: bolder;
            font-size: 20px;
            color: royalblue;
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
