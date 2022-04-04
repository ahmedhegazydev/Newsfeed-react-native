import React, { useState, useEffect, createRef, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import * as Progress from "react-native-progress";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import FlatCard from "../cards/FlatCard";
import { useNavigation } from "@react-navigation/native";
import { MORE_DETAILS_NEWS_NAME } from "../../constants/constants";
const { height } = Dimensions.get("window");
// import Lottie from "react-lottie";
import animationData from "../../assets/loading.json";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  const progress = useRef(new Animated.Value(0)).current;
  const handleLikeAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={handleLikeAnimation} style={styles.opacity}>
        <LottieView
          style={{
            width: 200,
            height: 200,
            // backgroundColor: "yellow",
          }}
          // speed={1}
          source={require("/Users/ahmedhegazy/Desktop/ReactNative-Apps/VOIS/Newsfeed/src/assets/99833-edupia-loading.json")}
          autoPlay={true}
          // loop={true}
        />
      </TouchableOpacity> */}
      <Progress.CircleSnail color={["red", "green", "blue"]} />
    </View>
  );
};
export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // width: 400,
    // height: 400,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    // backgroundColor: "red",
  },
});
