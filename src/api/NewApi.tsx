import moment from "moment";
import apiClient from "./client";
import { AxiosResponse } from "axios";
import { HEADLINES, SEARCH } from "../constants/constants";
import getAllNewsDummy from "../../src/assets/ApiDummy/getAllNewsDummy.json";
import searchNewsDummy from "../../src/assets/ApiDummy/searchNewsDummy.json";
import { showErrorToast } from "../../src/util/Toasts";
import { New } from "../data/New";

interface NewsResponse {
  data: New[];
  error: string | Error;
}

class NewsRepository {
  private formatArticle(article: any): New {
    return {
      ...article,
      publishedAt: moment(article.publishedAt).format("YYYY-MM-DD HH:mm:ss"),
    };
  }

  private handleErrorResponse(error: any): void {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log("Error:", error.message);
      showErrorToast(error.message);
    }
  }

  async getAllNewsEverything(): Promise<NewsResponse> {
    try {
      const endpoint = HEADLINES;
      const response: AxiosResponse = await apiClient.get(endpoint);

      const formattedArticles = response.data.articles.map((article: any) =>
        this.formatArticle(article)
      );

      return { data: formattedArticles, error: "" };
    } catch (error) {
      this.handleErrorResponse(error);
      const articles = getAllNewsDummy.articles;

      return { data: articles, error: error };
    }
  }

  async searchNews(query: string): Promise<New[]> {
    if (!query) return { data: [], error: "" };
    try {
      const endpoint = `${SEARCH}&q=${query.toLowerCase()}`;
      const response: AxiosResponse = await apiClient.get(endpoint);

      const formattedArticles = response.data.articles.map((article: any) =>
        this.formatArticle(article)
      );
      return { data: formattedArticles, error: "" };
    } catch (error) {
      this.handleErrorResponse(error);
      const articles = searchNewsDummy.articles;
      return articles;
    }
  }
}

export default new NewsRepository();
