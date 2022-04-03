import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FlatCard from "../cards/FlatCard";
import Title from "../common/Title";
import { useNavigation } from "@react-navigation/native";
import {
  LIST_ALL_NEWS_NAME,
  MORE_DETAILS_NEWS_NAME,
} from "../../constants/contants";
import useNews from "../../hooks/useNews";
import newsApi from "../../api/NewApi";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function VerticalList({ title, data }) {
  const navigation = useNavigation();
  // const [allNewsEverything] = useNews();
  const [newsEverything, setEverythingNews] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [enablePTR, setEnablePTR] = React.useState(false);

  const filterMultipleNews = async () => {
    const allNewsEverything = await newsApi.getAllNewsEverything();
    // const allFeaturedNews = allNewsEverything
    //   .filter((item) => item.featured === "on")
    //   .reverse()[0];
    setEverythingNews(allNewsEverything);
    setRefreshing(false);
    // console.log(allNewsEverything);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    filterMultipleNews();
    // setRefreshing(false);
  }, []);

  useEffect(() => {
    setEverythingNews(data);
  });

  return (
    <View>
      {/* <Title>{title}</Title> */}
      <ScrollView
        // scrollEnabled={false}
        refreshControl={
          <RefreshControl
            enabled={enablePTR}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={styles.container}
      >
        {newsEverything.map((item) => (
          <FlatCard
            onPress={() => {
              // console.log("onPress");
              // navigation.navigate(LIST_ALL_NEWS_NAME, { item });
              navigation.push(MORE_DETAILS_NEWS_NAME, { item });
            }}
            item={item}
            key={item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
