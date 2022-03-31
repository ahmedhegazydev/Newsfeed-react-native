import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SearchBar from "./SearchBar";

export default function Screen(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: SearchBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
  },
});
