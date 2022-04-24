import { NextPage } from "next";

import { useDispatch, useSelector } from "react-redux";
import Id from "../../../components/form/firstform/id";
import { RootState } from "../../../store/reducers";
import { CounterState } from "../../../store/types/state";
const FirstidContainer: NextPage = () => {
  const dispatch = useDispatch();
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );

  return (
    <div>
      <Id main={main} />
    </div>
  );
};

export default FirstidContainer;
