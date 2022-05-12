import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { imgLoader } from "../imgLoader";
import { CounterState, RootState } from "../store/types/state";
import img from "../image/파란불.ico";

const Nav = ({ logout, path }: { logout: () => void; path: String }) => {
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );

  return (
    <div className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <Image
              loader={imgLoader}
              src={img}
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
            <a className={path == "/" ? "active" : "nonactive"}>메인화면</a>
          </Link>
        </div>
        <div className="card">
          <Link href="/form">
            <a className={path == "/form" ? "active" : "nonactive"}>
              카드 고르기
            </a>
          </Link>
        </div>
        <div className="mypage">
          <Link href="/mypage">
            <a className={path == "/mypage" ? "active" : "nonactive"}>
              마이페이지
            </a>
          </Link>
        </div>
      </div>
      <div className="loginbar">
        <div className="login">
          {main.common.login == "admin" ? (
            <Link href="/login">
              <a>로그인</a>
            </Link>
          ) : (
            <div onClick={logout}> {main.common.login}</div>
          )}
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
          .active {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
