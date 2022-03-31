import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function SmallCard({ children, style }) {
  return <View style={[styles.container, style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,

    // fontWeight: "bold",
    // fontSize: size,
    backgroundColor: "white",
    borderRadius: 8,
    // justifyConent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
    // height: 200,
  },
});
