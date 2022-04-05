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
    const { data: allNewsEverything, error } =
      await newsApi.getAllNewsEverything();

    setEverythingNews(allNewsEverything);
    console.log(allNewsEverything);
    if (!error) {
      setLoading(false);
    }

    for (var i = 0; i < allNewsEverything.size; i++) {
      allNewsEverything[i].id = i;
    }
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [newsEverything, loading];
};
