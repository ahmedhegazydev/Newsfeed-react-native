import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import MainContainer from "./src/navigation/MainContainer.js";

export default function App() {
  return <MainContainer />;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
