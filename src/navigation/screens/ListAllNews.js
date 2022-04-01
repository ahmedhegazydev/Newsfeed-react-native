import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useEffect,
  useState,
} from "react-native";
import SearchBar from "../../components/SearchBar";
import newsApi from "../../api/NewApi";
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
  };

  useEffect(() => {
    filterMultipleNews();
    // return () => {
    //   effect;
    // };
  }, []);

  return (
    <View style={styles.container}>
      <Text>List All News!</Text>
      {/* <SearchBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    // paddingHorizontal: 15,
    // backgroundColor: "#f7f3f3",
    // flex: 1,
  },
});
