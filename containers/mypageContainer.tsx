import { NextPage } from "next";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MyPage from "../components/mypage";
import { datadel } from "../store/actions/action";
import { CounterState, RootState } from "../store/types/state";
import { js } from "../type";

const MypageContainer: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  const del = (e: EventTarget) => {
    dispatch(datadel((e as HTMLButtonElement).id));
  };
  const update = (e: EventTarget) => {
    console.log((e as HTMLButtonElement).id);
    router.push(`/form/firstform/update/${(e as HTMLButtonElement).id}`);
  };
  return (
    <div>
      <MyPage main={main} del={del} update={update} />
    </div>
  );
};
export default MypageContainer;
