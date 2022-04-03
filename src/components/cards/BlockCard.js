import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

export default function BlockCard({
  children,
  style,
  imageStyle,
  item,
  onPress,
}) {
  const { thumbnail, title, desc } = item;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image
          // source={require("../assets/images/test.png")}
          source={{ uri: thumbnail }}
          style={[styles.image, imageStyle]}
        />
        <View style={styles.contentContainer}>
          {/* <Title numberOfLines={2} size={18}>
          Everything you need to build on Android
        </Title>
        <SubTitle numberOfLines={3} size={15}>
          Android Studio is Android's official IDE. It is purpose-built for
          Android to accelerate your development and help you build the
          highest-quality apps for every Android device.
        </SubTitle> */}

          <Title numberOfLines={2} size={18}>
            {title}
          </Title>
          <SubTitle numberOfLines={3} size={15}>
            {desc}
          </SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,

    // fontWeight: "bold",
    // fontSize: size,
    backgroundColor: "white",
    borderRadius: 8,
    // justifyConent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
    // height: 200,
  },
});
