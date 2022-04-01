import React, { useState, useEffect } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import newsApi from "../api/NewApi";

export default useNews = () => {
  const [newsEverything, setEverythingNews] = useState([]);
  // const [breakingNews, setEverythingNews] = useState([]);
  // const [featuredNews, setEverythingNews] = useState([]);
  // const [politicalNews, setEverythingNews] = useState([]);
  // const [entertainmentNews, setEverythingNews] = useState([]);

  const filterMultipleNews = async () => {
    const allNewsEverything = await newsApi.getAllNewsEverything();
    // const allFeaturedNews = allNewsEverything
    //   .filter((item) => item.featured === "on")
    //   .reverse()[0];
    setEverythingNews(allNewsEverything);
    console.log(allNewsEverything);
  };

  useEffect(() => {
    filterMultipleNews();
    // return () => {
    //   effect;
    // };
  }, []);

  return [newsEverything];
};
