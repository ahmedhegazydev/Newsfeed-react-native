import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
  },
  titledark: {
    fontWeight: "bold",
    color: "#F5F5F5",
  },
  container: {},
});
