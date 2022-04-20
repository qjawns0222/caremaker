import axios from "axios";

export const Dafe = async () => {
  try {
    const data = axios.get(
      "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-6%EC%9D%BC%EC%B0%A8/carddata.json"
    );

    return data;
  } catch (e: any) {
    console.log(e.response.status);
  }
};
const num = Dafe();

export default num;
