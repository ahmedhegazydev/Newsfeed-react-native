import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BlockCard from "./src/components/cards/BlockCard.js";
import Screen from "./src/components/Screen.js";
import SearchBar from "./src/components/SearchBar.js";
import { Appearance } from "react-native";
import MainContainer from "./src/navigation/MainContainer.js";

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener((scheme) => {
    console.log(scheme.colorScheme);
  });

  return (
    // <Screen>
    /* <SearchBar /> */
    <MainContainer />
    // <BlockCard />
    // </Screen>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
