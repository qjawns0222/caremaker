import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const nav: NextPage = () => {
  return (
    <div className="header">
      <div className="logo">
        <Image
          src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
          alt="logo"
          width="70px"
          height="70px"
        />
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
      <style jsx>
        {`
          .header {
            background: linear-gradient(
              to left,
              rgb(251, 211, 233),
              rgb(187, 55, 125)
            );
            display: flex;
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
            font-size: 24px;
            color: royalblue;
          }
        `}
      </style>
    </div>
  );
};

export default nav;
