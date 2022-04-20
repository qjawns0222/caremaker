import { json } from "stream/consumers";

export interface js {
  data: {
    currentform: String;
    idx: String;
    maker: String;
    text: {
      address: String;
      content: String;
      date: String;
      tags: String;
      time: String;
      title: String;
    };
  };
  common: { login: String };
}
