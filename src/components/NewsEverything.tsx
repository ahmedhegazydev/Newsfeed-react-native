import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import VerticalList from "./lists/VerticalList";
import { New } from "../data/New";

interface Props {
  data: New[];
}

export default function EverythingNews({ data }: Props) {
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
