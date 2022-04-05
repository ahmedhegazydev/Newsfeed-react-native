import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FlatCard from "../cards/FlatCard";
import { useNavigation } from "@react-navigation/native";
import { MORE_DETAILS_NEWS_NAME } from "../../constants/constants";
import newsApi from "../../api/NewApi";

export default function VerticalList({ title, data }) {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [newsEverything, setEverythingNews] = useState([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const filterMultipleNews = async () => {
    setRefreshing(true);
    const { data: allNewsEverything, error } =
      await newsApi.getAllNewsEverything();
    if (!error) {
      setEverythingNews(allNewsEverything);
      setRefreshing(false);
    }
  };
  const onRefresh = React.useCallback(() => {
    console.log("onRefresh");
    filterMultipleNews();
  }, [refreshing]);

  useEffect(() => {
    setEverythingNews(data);
  });

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          tintColor="#000000"
          titleColor="#000000"
          colors={["red", "green", "blue"]}
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
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
