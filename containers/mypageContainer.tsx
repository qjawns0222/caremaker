import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MyPage from "../components/mypage";
import { datadel } from "../store/actions/action";
import { CounterState, RootState } from "../store/types/state";
import { js } from "../type";

const MypageContainer: NextPage = () => {
  const dispatch = useDispatch();
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  const del = (e: EventTarget) => {
    dispatch(datadel((e as HTMLButtonElement).id));
  };
  return (
    <div>
      <MyPage main={main} del={del} />
    </div>
  );
};
export default MypageContainer;
