import apiClient from "./client";
import { AxiosResponse } from "axios";

interface NewsResponse {
  data: any[];
  error: string | Error;
}

const getAllNewsEverything = async (): Promise<NewsResponse> => {
  try {
    const endpoint =
      "/everything?domains=wsj.com&apiKey=3b677719d8794bdb91440e41130d9449";
    const response: AxiosResponse = await apiClient.get(endpoint);
    return { data: response.data.articles, error: "" };
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log("Error while getting all everything news ", error.message);
    }
    return { data: [], error: error };
  }
};

const searchNews = async (query: string): Promise<any[]> => {
  if (!query) return [];
  try {
    const endpoint = `/everything?q=${query}&from=2022-03-31&to=2022-03-31&sortBy=popularity&apiKey=3b677719d8794bdb91440e41130d9449`;
    const response: AxiosResponse = await apiClient.get(endpoint);
    return response.data.articles;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log("Error while searching news ", error.message);
    }
    return [];
  }
};

export default {
  getAllNewsEverything,
  searchNews,
};
