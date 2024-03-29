import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeContext, useThemeContext } from "../../util/ThemeManager";

interface Props {
  children: any;
  numberOfLines?: number;
  size?: number;
}

export default function Title({
  children,
  numberOfLines = 2,
  size = 18,
}: Props) {
  const { theme } = useThemeContext(ThemeContext);

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
