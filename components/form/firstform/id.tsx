import { GetServerSideProps, NextPage } from "next";

const firstid: NextPage = () => {
  return (
    <div>
      <div className="section">
        <h1 className="title">노래방 가자</h1>
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
            <h3>&#34;노래방dasdsadsadsada&#34;</h3>
            검색해주세요
          </div>
        </div>

        <div className="content">
          <h3 className="contitle">계획</h3>
          <div className="condes">어디서 만나서 뭐하고 놀자</div>
        </div>
        <div className="tags">
          <div className="tag">놀자</div>
          <div className="tag">놀자</div>
          <div className="tag">놀자</div>
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
        `}
      </style>
    </div>
  );
};

export default firstid;
