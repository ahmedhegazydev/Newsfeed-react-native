import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ThemeContext } from "../../util/ThemeManager";

interface Props {
  children: any;
  numberOfLines?: number;
  size?: number;
}

export default function SubTitle({
  children,
  numberOfLines = 2,
  size = 15,
}: Props) {
  const { theme } = useContext(ThemeContext);

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
