import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Children } from "react/cjs/react.production.min";

export default function Title({ cildren, numberOfLines = 2, size = 18 }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={numberOfLines}>{Children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: size,
    // backgroundColor: "white",
    // borderRadius: 8,
    // justifyConent: "center",
  },
});
