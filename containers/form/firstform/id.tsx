import { NextPage } from "next";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import Id from "../../../components/form/firstform/id";
import { RootState } from "../../../store/reducers";
import { CounterState } from "../../../store/types/state";
const FirstidContainer: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  const update = () => {
    router.push(`/form/firstform/update/${router.query.id}`);
  };

  return (
    <div>
      <Id main={main} update={update} />
    </div>
  );
};

export default FirstidContainer;
