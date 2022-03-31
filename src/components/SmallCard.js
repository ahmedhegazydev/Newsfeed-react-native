import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Title from "./Title";
import SubTitle from "./SubTitle";
import BlockCard from "./BlockCard";

const { width } = Dimensions.get("window");

export default function SmallCard({ item }) {
  return <BlockCard style={styles.container} imageStyle={styles.image} />;
}

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: 200,
    marginRight: 15,
    // fontWeight: "bold",
    // fontSize: size,
    // backgroundColor: "white",
    // borderRadius: 8,
    // justifyConent: "center",
    // overflow: "hidden",
  },
  image: {
    // width: "100%",
    height: 100,
  },
  contentContainer: {
    // padding: 5,
    // height: 200,
  },
});
