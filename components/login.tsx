import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../store/types/state";

const Login = () => {
  const dispatch = useDispatch();
  const { main } = useSelector((state: RootState) => state);

  return (
    <div>
      {main.data.map((e, index) => {
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
