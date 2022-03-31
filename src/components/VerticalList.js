import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatCard from "./FlatCard";
import Title from "./Title";

export default function VerticalList({ title, data }) {
  return (
    <View>
      <Title>{title}</Title>
      <View style={styles.container}>
        {data.map((item) => (
          <FlatCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
