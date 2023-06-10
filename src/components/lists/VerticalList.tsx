import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RefreshControl } from "react-native-web-refresh-control";
import FlatCard from "../cards/FlatCard";
import { MORE_DETAILS_NEWS_NAME } from "../../constants/constants";
import newsApi from "../../api/NewApi";
import { New } from "../../data/New";

interface Props {
  title: string;
  data: New[];
}

export default function VerticalList({ title, data }: Props) {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [newsEverything, setEverythingNews] = useState<New[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const filterMultipleNews = async () => {
    setRefreshing(true);
    const { data: allNewsEverything, error } =
      await newsApi.getAllNewsEverything();
    setEverythingNews(allNewsEverything);
    setRefreshing(false);
  };

  const onRefresh = useCallback(() => {
    console.log("onRefresh");
    filterMultipleNews();
  }, [refreshing]);

  useEffect(() => {
    setEverythingNews(data);
  }, [data]);

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
          marginBottom: 7,
        }}
      />
    );
  };

  return (
    <FlatList
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
      data={newsEverything}
      renderItem={({ item, index, separators }) => (
        <FlatCard
          onPress={() => {
            navigation.push(MORE_DETAILS_NEWS_NAME, { item });
          }}
          item={item}
          key={item.id} // Use a unique key for each FlatCard
        />
      )}
      keyExtractor={(item, index) => item.id + index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
