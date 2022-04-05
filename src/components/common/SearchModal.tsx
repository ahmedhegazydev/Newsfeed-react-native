import React, { useState, useEffect, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FlatCard from "../cards/FlatCard";
import { useNavigation } from "@react-navigation/native";
import { MORE_DETAILS_NEWS_NAME } from "../../constants/constants";

const { height } = Dimensions.get("window");

const SearchModal = ({ visible, data, notFound }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  if (!visible) return null;
  if (visible && data.length === 0 && !notFound) return null;
  if (notFound)
    return (
      <View
        style={[
          styles.container,
          { justifyCenter: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {notFound}
        </Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
      >
        {data.map((item) => (
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
};
export default SearchModal;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    width: "100%",
    top: 15,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "white",
    maxHeight: height / 2,
    zIndex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 10,
    // margin: 20,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
});
