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
import useNews from "../../hooks/useNews";
export default function ListAllNewsScreen({ navigation }) {
  const [allNewsEverything] = useNews();

  return (
    <View style={styles.container}>
      {/* <Text>List All News!</Text> */}
      {/* <SearchBar /> */}
      <EverythingNews data={allNewsEverything} />
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
