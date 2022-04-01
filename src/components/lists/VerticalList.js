import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FlatCard from "../cards/FlatCard";
import Title from "../Title";
import { useNavigation } from "@react-navigation/native";
import {
  LIST_ALL_NEWS_NAME,
  MORE_DETAILS_NEWS_NAME,
} from "../../constants/contants";

export default function VerticalList({ title, data }) {
  const navigation = useNavigation();

  return (
    <View>
      {/* <Title>{title}</Title> */}
      <ScrollView style={styles.container}>
        {data.map((item) => (
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
