import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Index from "../../../components/form/firstform/index";
import { dataadd } from "../../../store/actions/action";
import { RootState } from "../../../store/reducers";
import { CounterState } from "../../../store/types/state";
import { da } from "../../../type";
const FirstindexContainer = () => {
  const dispatch = useDispatch();
  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );

  const titleref = useRef<HTMLInputElement>(null);
  const dateref = useRef<HTMLInputElement>(null);
  const timeref = useRef<HTMLInputElement>(null);
  const addressref = useRef<HTMLInputElement>(null);
  const contentref = useRef<HTMLTextAreaElement>(null);
  const tagsref = useRef<HTMLInputElement>(null);
  const reset: () => void = () => {
    titleref.current!.value = "";
    dateref.current!.value = "";
    timeref.current!.value = "";
    addressref.current!.value = "";
    contentref.current!.value = "";
    tagsref.current!.value = "";
  };
  const finish: () => void = () => {
    console.log(main.data);
    const data: da | undefined = makedata();
    if (data != undefined) {
      dispatch(dataadd(data));
      reset();
    } else {
      alert("태그 제외 모든 빈칸을 넣어주세요");
    }
  };
  const makedata = () => {
    if (
      titleref.current?.value &&
      dateref.current?.value &&
      timeref.current?.value &&
      addressref.current?.value &&
      contentref.current?.value
    ) {
      const tagarr: String[] | undefined = tagsref.current?.value.split("#");
      tagarr?.splice(0, 1);

      const data: da = {
        idx: parseInt(main.data[main.data.length - 1].idx).toString(),
        currentform: "first",
        maker: main.common.login,
        text: {
          address: addressref.current?.value,
          content: contentref.current?.value,
          date: dateref.current?.value,
          tags: tagarr,
          time: timeref.current?.value,
          title: titleref.current?.value,
        },
      };
      return data;
    }
  };
  return (
    <div>
      <Index
        titleref={titleref}
        dateref={dateref}
        timeref={timeref}
        addressref={addressref}
        contentref={contentref}
        tagsref={tagsref}
        finish={finish}
        reset={reset}
      />
    </div>
  );
};

export default FirstindexContainer;
