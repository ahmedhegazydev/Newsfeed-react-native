import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimension,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimension.get("window");

export default function PreviewNewsDetailsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/images/test.png")}
        // source={{ uri: thumbnail }}
        style={[styles.image]}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Everything you need to build on Android
        </Text>
        <Text style={styles.content}>
          Android Studio is Android's official IDE. It is purpose-built for
          Android to accelerate your development and help you build the
          highest-quality apps for every Android device.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // fontWeight: "bold",
    // fontSize: size,
    // backgroundColor: "white",
    // borderRadius: 8,
    // justifyConent: "center",
  },
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
});
