import axios from "axios";
import apiClient from "./client";

const getAllNewsEverything = async () => {
  try {
    const endpoint =
      "/everything?domains=wsj.com&apiKey=3b677719d8794bdb91440e41130d9449";
    const response = await apiClient.get(endpoint);
    return response.articles;
  } catch (error) {
    return [];
    console.log("Errror while getting all everything news ", error.message);
  }
};

export default {
  getAllNewsEverything,
};
