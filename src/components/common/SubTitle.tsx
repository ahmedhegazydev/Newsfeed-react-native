import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ThemeProvider, ThemeContext } from "../../util/ThemeManager";

export default function SubTitle({ children, numberOfLines = 2, size = 15 }) {
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
    color: "black",
  },
  titledark: {
    color: "#707070",
  },
  container: {},
});
