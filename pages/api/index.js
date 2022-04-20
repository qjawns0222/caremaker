import axios from "axios";

export default function handler(req, res) {
  const url =
    "https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-6%EC%9D%BC%EC%B0%A8/carddata.json";
  axios
    .get(url)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
}
