import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Modify from "../../../../components/form/firstform/update/[id]";
import { dataupdate } from "../../../../store/actions/action";
import { CounterState, RootState } from "../../../../store/types/state";
import { da } from "../../../../type";
const ModifyContainer = () => {
  const dispatch = useDispatch();

  const { main }: { main: CounterState } = useSelector(
    (state: RootState) => state
  );
  const { query } = useRouter();
  const id: String | string[] | undefined = query.id;

  useEffect(() => {
    main.data.find((res) => {
      if (res.idx == id) {
        titleref.current!.value = res.text.title;
        dateref.current!.value = res.text.date;
        timeref.current!.value = res.text.time;
        addressref.current!.value = res.text.address;
        contentref.current!.value = res.text.content;
        tagsref.current!.value = "#" + res.text.tags?.join("#");

        return res;
      }
    });
  }, [main.data, id]);

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
      dispatch(dataupdate(data));
      if (main.common.login == "admin") {
        alert(`id를 기억하세요 id:${id}`);
      }
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
      const tagarr: string[] | undefined = tagsref.current?.value.split("#");
      tagarr?.splice(0, 1);

      const data: da = {
        idx: query.id!.toString(),
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
      <Modify
        main={main}
        titleref={titleref}
        dateref={dateref}
        timeref={timeref}
        addressref={addressref}
        contentref={contentref}
        tagsref={tagsref}
        finish={finish}
        reset={reset}
        id={id}
      />
    </div>
  );
};
export default ModifyContainer;
