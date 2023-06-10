import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constants/constants";

const newsApi: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default newsApi;
