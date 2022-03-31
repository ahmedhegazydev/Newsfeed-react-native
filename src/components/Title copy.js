import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    justifyConent: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});
