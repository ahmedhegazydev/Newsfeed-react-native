import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function BlockCard({ children }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/test.png")}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Title>title</Title>
        <SubTitle>Sub title</SubTitle>
      </View>
    </View>
  );
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
