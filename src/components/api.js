import axios from "axios";
const APPID = "655ace0e39d08a335406cc77";

export const apiCall = axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: { "app-id": APPID },
});
