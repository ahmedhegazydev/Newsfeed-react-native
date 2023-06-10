import moment from "moment";
import apiClient from "./client";
import { AxiosResponse } from "axios";
import { HEADLINES, SEARCH } from "../constants/constants";

interface NewsResponse {
  data: any[];
  error: string | Error;
}

const getAllNewsEverything = async (): Promise<NewsResponse> => {
  try {
    const endpoint = HEADLINES;
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
    const endpoint = `${SEARCH}&q=${query.toLowerCase()}`;
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
