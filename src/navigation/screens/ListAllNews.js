import React, { useState, useEffect, createRef } from "react";

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
import { ScrollView } from "react-native-gesture-handler";
// import DelayInput from "react-native-debounce-input";

export default function ListAllNewsScreen({ navigation }) {
  const [allNewsEverything] = useNews();
  const [value, setValue] = useState("Have");
  const inputRef = createRef();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar />
        <EverythingNews data={allNewsEverything} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
