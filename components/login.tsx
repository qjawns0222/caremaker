import { AppProps } from "next/app";
import { ReactNode, useEffect, useState } from "react";

import { da, js } from "../type";
const Login = ({ data, name }: { data: js; name: String }) => {
  const [api, setapi] = useState<Array<da>>(data.data);
  useEffect(() => {
    setapi(data.data);
  }, [data]);
  console.log(api[0].text);
  return (
    <div>
      {api.map((e, index) => {
        return (
          <div key={0}>
            <div key={index}>{e.idx}</div>
            <div key={index}>{e.currentform}</div>
            <div key={index}>{e.maker}</div>
            <div key={index}>
              <div>{e.text.title}</div>
              <div>{e.text.address}</div>
              <div>{e.text.content}</div>
              <div>{e.text.date}</div>
              <div>{e.text.tags}</div>
              <div>{e.text.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Login;
