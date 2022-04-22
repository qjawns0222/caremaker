export interface ActionProps {
  type: string;
}

export interface CounterState {
  data: [
    {
      idx: String;
      currentform: String;
      maker: String;
      text: {
        title: String;
        date: String;
        time: String;
        address: String;
        content: String;
        tags: String;
      };
    }
  ];
  common: { login: String };
}

export type RootState = {
  main: CounterState;
};
