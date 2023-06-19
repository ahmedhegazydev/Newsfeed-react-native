import React, { useContext } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { ThemeContext } from "../../util/ThemeManager";
import FastImage from "react-native-fast-image";

interface FlatCardProps {
  item: {
    urlToImage: string;
    title: string;
    description: string;
  };
  onPress: () => void;
}

export default function FlatCard({ item, onPress }: FlatCardProps) {
  const { urlToImage, title, description } = item;
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableWithoutFeedback testID={`listItem-${title}`} onPress={onPress}>
      <View style={[styles.container, styles[`container${theme}`]]}>
        <FastImage
          source={{ uri: urlToImage }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.contentContainer}>
          <Title numberOfLines={2} size={18}>
            {title}
          </Title>
          <SubTitle numberOfLines={4} size={15}>
            {description}
          </SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3,
  },
  containerlight: {
    backgroundColor: "white",
  },
  containerdark: {
    backgroundColor: "#282828",
  },
  image: {
    flex: 0.35,
    height: "100%",
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 10,
  },
});
