import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import BlockCard from "./src/components/cards/BlockCard.js";
import Screen from "./src/components/Screen.js";
import SearchBar from "./src/components/SearchBar.js";
import { Appearance } from "react-native";
import MainContainer from "./src/navigation/MainContainer.js";
import { store, persistor } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "./src/util/ThemeManager.js";

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  // state = { isReduxLoaded: false };
  const [reduxLoaded, setReduxLoaded] = useState(false);

  onBeforeLift = () => {
    // this.setState({ isReduxLoaded: true }, () => {});
    setReduxLoaded(true);
  };
  Appearance.addChangeListener((scheme) => {
    console.log(scheme.colorScheme);
  });

  // return (
  //   <Provider store={store}>
  //     <StatusBar barStyle="dark-content" />
  //     <PersistGate onBeforeLift={this.onBeforeLift} persistor={persistor}>
  //       <MainContainer />
  //     </PersistGate>
  //   </Provider>
  // );

  return (
    <ThemeProvider>
      <MainContainer />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
