import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { ThemeProvider, ThemeContext } from "../../util/ThemeManager";

export default function FlatCard({ item, onPress }) {
  const { urlToImage, title, description } = item;
  const { theme } = React.useContext(ThemeContext);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, styles[`container${theme}`]]}>
        <Image source={{ uri: urlToImage }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Title numberOfLines={2} size={18}>
            {title}
          </Title>
          <SubTitle numberOfLines={2} size={15}>
            {description}
          </SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerlight: {
    // width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },
  containerdark: {
    // width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#282828",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    flex: 0.35,
    height: "100%",
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});
