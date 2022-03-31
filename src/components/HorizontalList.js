import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import SmallCard from "./SmallCard";
import Title from "./Title";

export default function HorizontalList({ title, data }) {
  return (
    <>
      <Title size={20}>{title}</Title>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showHorizonatlScrollIndicator={false}
        renderItem={({ item }) => <SmallCard item={item} />}
      />
    </>
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
});
