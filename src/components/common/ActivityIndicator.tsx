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

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible }: Props) => {
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
      <Progress.CircleSnail color={["red", "green", "blue"]} />
    </View>
  );
};
export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
