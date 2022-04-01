import React, { useState, useEffect } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../../components/SearchBar";
import newsApi from "../../api/NewApi";
import EverythingNews from "../../components/NewsEverything";
export default function ListAllNewsScreen({ navigation }) {
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

  return (
    <View style={styles.container}>
      {/* <Text>List All News!</Text> */}
      {/* <SearchBar /> */}
      <EverythingNews data={newsEverything} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    // paddingHorizontal: 15,
    // backgroundColor: "#f7f3f3",
    // flex: 1,
    padding: 10,
  },
});
