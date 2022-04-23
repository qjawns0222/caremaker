import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CounterState, RootState } from "../store/types/state";

const Login = () => {
  const dispatch = useDispatch();
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );

  return (
    <div>
      {main.data.map((e, index) => {
        return (
          <div key={index}>
            <div key={"id"}>{e.idx}</div>
            <div key={"curr"}>{e.currentform}</div>
            <div key={"maker"}>{e.maker}</div>
            <div key={"data"}>
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
