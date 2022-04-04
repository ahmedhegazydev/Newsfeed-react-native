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
  const [loading, setLoading] = useState(true);

  const filterMultipleNews = async () => {
    setLoading(true);
    const allNewsEverything = await newsApi.getAllNewsEverything();

    setEverythingNews(allNewsEverything);
    console.log(allNewsEverything);
    setLoading(false);
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [newsEverything, loading];
};
