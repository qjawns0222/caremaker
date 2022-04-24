import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { da, js } from "../../../type";

const Firstid = ({ main }: { main: js }) => {
  const { query } = useRouter();
  const id = query.id;

  return (
    <div>
      {main.data.map((res: da, index: number) => {
        if (res.idx == id) {
          return (
            <div key={index}>
              <div className="section">
                <h1 className="title" key={"title"}>
                  {res.text.title}
                </h1>
                <div className="time">
                  <div className="timetitle">약속 시간</div>
                  <div className="timecontent">
                    <div className="timedateinput">{res.text.time}</div>
                    <div className="timetimeinput">{res.text.date}</div>
                  </div>
                </div>
                <div className="mapinfo">
                  <div className="map">
                    <iframe
                      src="https://m.map.kakao.com/"
                      width="350"
                      height="550"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="mapdes">
                    지도에
                    <h3>&#34;{res.text.address}&#34;</h3>
                    검색해주세요
                  </div>
                </div>

                <div className="content">
                  <h3 className="contitle">계획</h3>
                  <div className="condes">{res.text.content}</div>
                </div>
                <div className="tags">
                  {res.text.tags.map((res, index) => {
                    return (
                      <div key={`tags${index}`} className="tag">
                        {res}
                      </div>
                    );
                  })}
                </div>
                <div className="buttons">
                  <div className="reset">
                    <button>수정</button>
                  </div>
                  <div className="finish">
                    <button>완료</button>
                  </div>
                </div>
              </div>

              <style jsx>
                {`
                  .section {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    min-height: 900px;
                    background-color: #f5b467;
                  }
                  .section > .title {
                    margin: 1%;
                    color: #196aff;
                  }
                  .scetion > .time {
                    width: 100%;
                  }
                  .section > .time > .timetitle {
                    font-size: 28px;
                    font-weight: bolder;
                    width: 350px;
                    text-align: center;
                    margin: 2%;
                    display: flex;
                    flex-direction: column;
                  }
                  .section > .time > .timetitle::after {
                    content: " ";
                    border: 1px solid #636beb;
                    width: 90%;
                    margin: auto;
                  }
                  .section > .time > .timecontent {
                    font-size: 28px;
                    font-weight: bolder;
                    width: 350px;
                    text-align: center;
                    display: flex;
                    justify-content: space-around;
                    margin: 2%;
                  }
                  .section > .time > .timecontent > * {
                    font-size: 18px;
                    font-weight: bolder;
                  }
                  .section > .mapinfo {
                    border: 5px solid #636beb;
                    border-radius: 10px;
                    max-width: 354px;
                    margin: 1%;
                  }
                  .section > .mapinfo > .map {
                    background-color: whitesmoke;
                  }
                  .section > .mapinfo > .mapdes {
                    font-size: 20px;
                    text-align: center;
                    padding: 1%;
                    background-color: whitesmoke;
                  }
                  .section > .content {
                    min-width: 350px;
                    display: flex;
                    flex-direction: column;
                    margin: 1%;
                    border: 3px solid #636beb;
                    background-color: #eab7f5;
                  }
                  .section > .content > .contitle {
                    text-align: center;
                    color: #196aff;
                    font-size: 28px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                  }
                  .section > .content > .contitle::after {
                    content: " ";
                    border: 1px solid #636beb;
                    width: 80%;
                    margin: auto;
                  }
                  .section > .content > .condes {
                    text-align: center;
                    font-weight: bolder;
                    font-size: 18px;
                    width: 100%;
                  }
                  .section > .tags {
                    width: 350px;
                    display: flex;
                    flex-flow: wrap;
                    justify-content: center;
                  }
                  .section > .tags > .tag {
                    border: 1px solid #636beb;
                    border-radius: 16px;
                    margin: 1%;
                    padding: 1%;
                    background-color: #636beb;
                    font-weight: bolder;
                    color: whitesmoke;
                  }
                  .section > .tags > .tag::before {
                    content: "#";
                  }
                  .section > .buttons {
                    display: flex;
                    justify-content: center;
                    width: 90%;
                    max-width: 350px;
                  }
                  .section > .buttons > * {
                    width: 200px;
                  }
                  .section > .buttons > * > * {
                    font-weight: bolder;
                    font-size: 28px;
                    margin: 5%;
                    max-width: 100%;
                    padding: 5%;

                    border-radius: 12px;
                  }
                  .section > .buttons > .finish {
                    display: flex;
                    justify-content: end;
                  }
                  .section > .buttons > .reset > * {
                    background-color: yellow;
                    border: 1px solid;
                  }
                  .section > .buttons > .finish > * {
                    background-color: #6856f8;
                    border: 1px solid;
                    display: flex;
                    justify-content: end;
                  }
                `}
              </style>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Firstid;
