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
        {/* <Text>List All News!</Text> */}
        <SearchBar />
        {/* <DelayInput
        value={value}
        minLength={3}
        inputRef={inputRef}
        onChangeText={setValue}
        delayTimeout={500}
        style={{ margin: 10, height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <Text>value: {value}</Text> */}
        <EverythingNews data={allNewsEverything} />
      </View>
    </ScrollView>
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
