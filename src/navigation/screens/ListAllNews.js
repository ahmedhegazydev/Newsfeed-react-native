import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../../components/SearchBar";

export default function ListAllNewsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>List All News!</Text>
      {/* <SearchBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    // paddingHorizontal: 15,
    // backgroundColor: "#f7f3f3",
    // flex: 1,
  },
});
