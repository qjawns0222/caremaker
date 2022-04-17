import { NextPage } from "next";
import Link from "next/link";

const MyPage: NextPage = () => {
  return (
    <div className="section">
      <div className="welcome">
        <div className="nick">아이디 </div>
        <div className="content">님 어서오세요.</div>
      </div>
      <hr className="welcomeline" />
      <div className="cards">
        <div className="firstform">
          <div className="firsttitle">약속</div>
          <div className="firstlists">
            <div className="firstlist">
              <div className="url">
                <Link href="/login">
                  <a>www.naver.com</a>
                </Link>
              </div>
              <div className="button">
                <div className="delbutton">
                  <button>삭제</button>
                </div>
                <div className="updatebutton">
                  <button>수정</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="firstlist">
              <div className="url">
                <Link href="/login">
                  <a>www.naver.com</a>
                </Link>
              </div>
              <div className="button">
                <div className="delbutton">
                  <button>삭제</button>
                </div>
                <div className="updatebutton">
                  <button>수정</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="firstlist">
              <div className="url">
                <Link href="/login">
                  <a>www.naver.com</a>
                </Link>
              </div>
              <div className="button">
                <div className="delbutton">
                  <button>삭제</button>
                </div>
                <div className="updatebutton">
                  <button>수정</button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background-color:whitesmoke;
            min-height:850px;
          }
          .section > .welcome {
            display: flex;
            align-items: end;
            justify-content: center;
            font-weight: bolder;
            margin: 2%;
            width: 100%;
          }
          .section > .welcome > .nick {
            text-align: center;
            font-size: 38px;
          }
          .section > .welcome > .content {
            text-align: center;
            font-size: 18px;
            display: flex;
            flex-direction: column;
          }
          .section > .welcomeline {
            width: 90%;
            border: 1px solid black;
          }
          .section > .cards {
            display: flex;
            align-items: end;
            justify-content: center;
            margin: 2%;
            width: 100%;
          }
          .section > .cards > .firstform {
            width: 90%;
            border: 4px solid blue;
            border-radius: 10px;
          }
          .section > .cards > .firstform > .firsttitle {
            display: flex;
            flex-direction: column;
            font-weight: bolder;
            font-size: 28px;
          }
          .section > .cards > .firstform > .firsttitle::after {
            border: 1px solid blue;
            width: 99%;
            margin: auto;
            border-radius: 10px;
            content: "";
          }
          .section > .cards > .firstform > .firstlists > .firstlist {
            display: flex;
            font-weight: bolder;
            font-size: 18px;
            margin: 1%;
            justify-content: space-between;
          }
          .section > .cards > .firstform > .firstlists > .firstlist > .button {
            display:flex;
          }
          .section > .cards > .firstform > .firstlists > .firstlist > .button {
            width: 20%;
            display-flex;
            justify-content:space-around;
            
           
          }
          .section
            > .cards
            > .firstform
            > .firstlists
            > .firstlist
            > .button
            > * {
            max-width: 50%;
            margin: 1%;
          }
          .section
            > .cards
            > .firstform
            > .firstlists
            > .firstlist
            > .button
            > *
            > button {
            font-weight: bolder;
            font-size: 18px;

            width: 100%;
          }
          .section > .cards > .firstform > .firstlists > hr {
            border: 1px solid black;
            margin: auto;
            margin-bottom: 2%;
            width: 99%;
          }
        `}
      </style>
    </div>
  );
};

export default MyPage;
