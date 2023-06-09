import moment from "moment";
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

    const formattedArticles = response.data.articles.map((article: any) => ({
      ...article,
      publishedAt: moment(article.publishedAt).format("YYYY-MM-DD HH:mm:ss"),
    }));

    return { data: formattedArticles, error: "" };
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

    const formattedArticles = response.data.articles.map((article: any) => ({
      ...article,
      publishedAt: moment(article.publishedAt).format("YYYY-MM-DD HH:mm:ss"),
    }));

    return formattedArticles;
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
