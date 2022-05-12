import type { NextPage } from "next";
import Image from "next/image";
import img from "../image/파란불.ico";
import { imgLoader } from "../imgLoader";

const Home: NextPage = () => {
  return (
    <div>
      <div className="main">
        <div className="title">모바일 초대장</div>
        <div className="image">
          <Image
            loader={imgLoader}
            src={img}
            alt="logo"
            width="500px"
            height="500px"
          />
        </div>
        <div className="content">
          약속 내용을 단순하게 한번의 링크로 정리해 드립니다
        </div>
      </div>

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 95px;
          background-color: #57648c;
        }
        .main > .title {
          font-weight: bolder;
          font-size: 48px;
          color: orange;
        }
        .main > .content {
          font-weight: bolder;
          font-size: 28px;
          color: orange;
        }
        .main > .image {
          border: 4px solid #57648c;
          border-radius: 50%;
          background-color: black;
          margin: 30px;
        }
      `}</style>
    </div>
  );
};

export default Home;
