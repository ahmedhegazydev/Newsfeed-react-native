import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BlockCard from "./src/components/BlockCard.js";
import Screen from "./src/components/Screen.js";
import SearchBar from "./src/components/SearchBar.js";

import MainContainer from "./src/navigation/MainContainer.js";

export default function App() {
  return (
    <Screen>
      {/* <SearchBar /> */}
      {/* <MainContainer /> */}
      <BlockCard />
    </Screen>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
