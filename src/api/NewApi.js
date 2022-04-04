import axios from "axios";
import apiClient from "./client";

const getAllNewsEverything = async () => {
  try {
    const endpoint =
      "/everything?domains=wsj.com&apiKey=3b677719d8794bdb91440e41130d9449";
    const response = await apiClient.get(endpoint);

    return response.data.articles;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log("Errror while getting all everything news ", error.message);
    }
    return [];
  }
};

const searchNews = async (query) => {
  if (!query) return {};
  try {
    const endpoint = `/everything?q=${query}&from=2022-03-31&to=2022-03-31&sortBy=popularity&apiKey=3b677719d8794bdb91440e41130d9449`;
    const response = await apiClient.get(endpoint);
    return response.data.articles;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log("Errror while  searchNews  ", error.message);
    }
    return [];
  }
};

export default {
  getAllNewsEverything,
  searchNews,
};
