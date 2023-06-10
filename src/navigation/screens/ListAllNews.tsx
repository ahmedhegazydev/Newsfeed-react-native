import React, { useState, useEffect, createRef, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SearchBar from "../../components/SearchBar";
import EverythingNews from "../../components/NewsEverything";
import useNews from "../../hooks/useNews";
import ActivityIndicator from "../../components/common/ActivityIndicator";
import { useNavigation } from "@react-navigation/native";
import { MORE_DETAILS_NEWS_NAME } from "../../constants/constants";
import { StackNavigationProp } from "@react-navigation/stack";

interface RouteParams {
  id: number;
}

type ListAllNewsScreenNavigationProp = StackNavigationProp<any, "ListAllNews">;

type ListAllNewsScreenProps = {
  route: { params?: RouteParams };
  navigation: ListAllNewsScreenNavigationProp;
};

export default function ListAllNewsScreen({
  route,
  navigation,
}: ListAllNewsScreenProps) {
  const [allNewsEverything, loading] = useNews();

  useEffect(() => {
    getPassedDeepLinkParams();
  }, []);

  const getPassedDeepLinkParams = () => {
    if (route.params && route.params.id) {
      const id = route.params.id;
      console.log(id);
      navigation.push(MORE_DETAILS_NEWS_NAME, {
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
  };
  return (
    <>
      <View style={styles.container}>
        <SearchBar />
        <EverythingNews data={allNewsEverything} />
      </View>
      <ActivityIndicator visible={loading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
