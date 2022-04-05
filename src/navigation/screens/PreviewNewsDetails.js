import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
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
import { MORE_DETAILS_NEWS_NAME } from "../../constants/constants";

const { width, height } = Dimensions.get("window");

const PreviewNewsDetailsScreen = ({ route }) => {
  const {
    urlToImage: image,
    content,
    url,
    title,
    description,
  } = route.params.item;
  const navigation = useNavigation();

  useEffect(() => {
    if (typeof route != "undefined" && route.params && route.params.id) {
      const passedNewId = route.params.id;
      navigation.navigate(MORE_DETAILS_NEWS_NAME, {
        item: {
          id: 2,
          source: {
            id: "the-wall-street-journal",
            name: "The Wall Street Journal",
          },
          author: "Holman W. Jenkins, Jr.",
          title:
            "The Federal Government vs. Imaginary Business Felons - The Wall Street Journal",
          description:
            "Juries aren’t impressed with the Justice Department’s attempts to criminalize plane crashes and chicken prices.",
          url: "https://www.wsj.com/articles/washington-vs-imaginary-business-felons-cost-pressures-lawsuits-pricing-information-buyers-consumers-11648848232",
          urlToImage: "https://images.wsj.net/im-516974/social",
          publishedAt: "2022-04-01T22:02:00Z",
          content:
            "March wasnt a good month for federal prosecutors trying to hold alleged business malefactors accountable in criminal cases weve previously discussed in this column. \r\nPredictably, Boeing s former chi… [+169 chars]",
        },
      });
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={[styles.image]} />
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
  container: {},
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
