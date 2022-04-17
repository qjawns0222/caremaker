import { NextPage } from "next";

const FirstForm: NextPage = () => {
  return (
    <div>
      <div className="section">
        <h1 className="title">
          <input className="titleinput" placeholder="약속이름 작성" />
        </h1>
        <div className="time">
          <div className="timetitle">약속 시간</div>
          <div className="timecontent">
            <input type="date" className="timedateinput" />
            <input type="time" className="timetimeinput" />
          </div>
        </div>
        <div className="mapinfo">
          <div className="map">
            <iframe
              src="https://m.map.kakao.com/"
              width="350"
              height="350"
              loading="lazy"
            ></iframe>
          </div>
          <div className="mapdes">
            지도에
            <h3>
              <input
                className="mapdesinput"
                placeholder="주소 또는 장소 이름 작성"
              />
            </h3>
            검색해주세요
          </div>
        </div>

        <div className="content">
          <h3 className="contitle">계획</h3>
          <div className="condes">
            <textarea className="condesinput" placeholder="세부내용 작성" />
          </div>
        </div>
        <input className="tagsinput" />
        <div className="tags">
          <div className="tag">예시</div>
          <div className="tag">예시</div>
          <div className="tag">예시</div>
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
          .section > .title > .titleinput {
            font-size: 28px;
            text-align: center;
            font-weight: bolder;
            width: 350px;
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
          .section > .mapinfo > .mapdes > h3 > .mapdesinput {
            font-size: 20px;
            text-align: center;
            font-weight: bolder;
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
          .section > .content > .condes > .condesinput {
            text-align: center;
            font-weight: bolder;
            font-size: 18px;
            margin: 1%;
            width: 80%;
            height: 100px;
          }
          .tagsinput {
            width: 350px;
            font-size: 18px;
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
        `}
      </style>
    </div>
  );
};
export default FirstForm;
