import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Hyperlink from "react-native-hyperlink";

const { width, height } = Dimensions.get("window");

const PreviewNewsDetailsScreen = ({ route }) => {
  const {
    urlToImage: image,
    content,
    url,
    title,
    description,
  } = route.params.item;

  return (
    <ScrollView style={styles.container}>
      <Image
        // source={require("/Users/ahmedhegazy/Desktop/ReactNative-Apps/VOIS/Newsfeed/src/assets/images/test.png")}
        source={{ uri: image }}
        style={[styles.image]}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Hyperlink onPress={(url, text) => alert(url + ", " + text)}>
          <Text style={{ fontSize: 15, marginBottom: 6 }}>{url}</Text>
        </Hyperlink>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10 }}>
          Description
        </Text>
        <Text style={styles.content}>{description}</Text>

        <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10 }}>
          Content
        </Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </ScrollView>
  );
};

export default PreviewNewsDetailsScreen;

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
