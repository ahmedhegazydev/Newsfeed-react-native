import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import VerticalList from "./lists/VerticalList";

export default function EverythingNews({ data }) {
  return (
    <View style={styles.container}>
      <VerticalList title={"Everything News"} data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  container: {},
});
