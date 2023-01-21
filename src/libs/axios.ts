import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.16.60.238:3000",
});