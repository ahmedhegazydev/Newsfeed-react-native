import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import VerticalList from "./VerticalList";

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
    // fontSize: size,
    // backgroundColor: "white",
    // borderRadius: 8,
    // justifyConent: "center",
  },
  container: {},
});
