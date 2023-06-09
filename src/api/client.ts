import axios, { AxiosInstance } from "axios";

const newsApi: AxiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export default newsApi;
