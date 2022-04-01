import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FlatCard from "./FlatCard";
import Title from "./Title";

export default function VerticalList({ title, data }) {
  return (
    <View>
      {/* <Title>{title}</Title> */}
      <ScrollView style={styles.container}>
        {data.map((item) => (
          <FlatCard item={item} key={item.id} />
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
