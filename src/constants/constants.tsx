export const HOME_NAME: string = "Home";
export const SETTINGS_NAME: string = "Settings";
export const LIST_ALL_NEWS_NAME: string = "ListAllNews";
export const MORE_DETAILS_NEWS_NAME: string = "NewsDetails";
export const KEY_STORE_LANGUAGE: string = "KEY_STORE_LANGUAGE";

export const PAGESIZE: number = 20;

//API URL
export const API_URL: string = "https://newsapi.org/v2";
export const API_KEY: string = "?apiKey=3b677719d8794bdb91440e41130d9449";
export const API_PARAMS: string = `&pageSize=${PAGESIZE}`;

//API End Points
export const HEADLINES: string = `${API_URL}/top-headlines${API_KEY}${API_PARAMS}&country=us`;
export const SEARCH: string = `${API_URL}/everything${API_KEY}${API_PARAMS}&sortBy=relevancy`;
