import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const make: NextPage = () => {
  return (
    <div>
      <div className="section">
        <div className="title">원하는 양식을 선택해주세요</div>
        <div className="forms">
          <Link href="/form/firstform">
            <a className="form">
              <div className="image">
                <Image
                  src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
                  alt="promise"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="name">친구 약속 만들기</div>
              <div className="des">
                친구와 간단한 약속
                <br /> 설명보다는 한번의 링크로 해결하세요
              </div>
            </a>
          </Link>
          <Link href="/form/firstform">
            <a className="form">
              <div className="image">
                <Image
                  src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
                  alt="promise"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="name">친구 약속 만들기</div>
              <div className="des">
                친구와 간단한 약속
                <br /> 설명보다는 한번의 링크로 해결하세요
              </div>
            </a>
          </Link>
          <Link href="/form/firstform">
            <a className="form">
              <div className="image">
                <Image
                  src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
                  alt="promise"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="name">친구 약속 만들기</div>
              <div className="des">
                친구와 간단한 약속
                <br /> 설명보다는 한번의 링크로 해결하세요
              </div>
            </a>
          </Link>
          <Link href="/form/firstform">
            <a className="form">
              <div className="image">
                <Image
                  src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
                  alt="promise"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="name">친구 약속 만들기</div>
              <div className="des">
                친구와 간단한 약속
                <br /> 설명보다는 한번의 링크로 해결하세요
              </div>
            </a>
          </Link>
          <Link href="/form/firstform">
            <a className="form">
              <div className="image">
                <Image
                  src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
                  alt="promise"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="name">친구 약속 만들기</div>
              <div className="des">
                친구와 간단한 약속
                <br /> 설명보다는 한번의 링크로 해결하세요
              </div>
            </a>
          </Link>
          <Link href="/form/firstform">
            <a className="form">
              <div className="image">
                <Image
                  src="https://raw.githubusercontent.com/qjawns0222/portfolio/main/img/%ED%8C%8C%EB%9E%80%EB%B6%88-%EB%A1%9C%EA%B3%A0.ico"
                  alt="promise"
                  width="100px"
                  height="100px"
                />
              </div>
              <div className="name">친구 약속 만들기</div>
              <div className="des">
                친구와 간단한 약속
                <br /> 설명보다는 한번의 링크로 해결하세요
              </div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .section {
            background-color: #57648c;
            min-height: 1000px;
          }
          .title {
            font-weight: bolder;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 2%;
            color: orange;
            font-size: 28px;
          }
          .forms {
            border: 4px solid black;
            border-radius: 10px;
            min-height: 700px;
            margin: 0px 20px 50px 20px;
            display: flex;
            background-color: rgb(212, 117, 168);
            flex-flow: wrap;
          }
          .forms > .form {
            width: 25%;
            height: 40%;
            border: 3px solid black;
            border-radius: 10px;
            margin: 3%;
            background-color: #c2b4d6;
          }

          .forms > .form > * {
            width: 100%;
            text-align: center;
          }
          .forms > .form > .image {
            width: 80%;
            border: 3px solid black;
            border-radius: 10px;
            margin: auto;
            margin-top: 2%;
            margin-bottom: 6%;
            background-color: white;
          }
          .forms > .form > .name {
            font-weight: bolder;
            font-size: 25px;
            margin-bottom: 3%;
          }
          .forms > .form > .des {
            font-weight: bolder;
            font-size: 15px;
            margin: auto;
            margin-bottom: 1%;
            width: 80%;
          }
        `}
      </style>
    </div>
  );
};

export default make;
