import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FlatCard from "../cards/FlatCard";
import Title from "../common/Title";
import { useNavigation } from "@react-navigation/native";
import {
  LIST_ALL_NEWS_NAME,
  MORE_DETAILS_NEWS_NAME,
} from "../../constants/constants";
import useNews from "../../hooks/useNews";
import newsApi from "../../api/NewApi";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function VerticalList({ title, data }) {
  const navigation = useNavigation();

  const [newsEverything, setEverythingNews] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [enablePTR, setEnablePTR] = React.useState(false);

  const filterMultipleNews = async () => {
    const allNewsEverything = await newsApi.getAllNewsEverything();
    setEverythingNews(allNewsEverything);
    setRefreshing(false);
  };
  const onRefresh = React.useCallback(() => {
    console.log("onRefresh");
    // setRefreshing(true);
    // filterMultipleNews();
  }, []);

  useEffect(() => {
    setEverythingNews(data);
  });

  return (
    <View>
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
