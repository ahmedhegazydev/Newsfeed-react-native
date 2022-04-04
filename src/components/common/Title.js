import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ThemeProvider, ThemeContext } from "../../util/ThemeManager";

export default function Title({ children, numberOfLines = 2, size = 18 }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text
        numberOfLines={numberOfLines}
        style={[theme === "light" ? styles.titlelight : styles.titledark]}
      >
        {children}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titlelight: {
    fontWeight: "bold",
    color: "black",
    // fontSize: size,
    // backgroundColor: "white",
    // borderRadius: 8,
    // justifyConent: "center",
  },
  titledark: {
    fontWeight: "bold",
    color: "#F5F5F5",
    // fontSize: size,
    // backgroundColor: "white",
    // borderRadius: 8,
    // justifyConent: "center",
  },
  container: {},
});
