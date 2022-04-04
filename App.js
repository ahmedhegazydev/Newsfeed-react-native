import React, { useState, useEffect, useMemo } from "react";
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
import { ThemeProvider, ThemeContext } from "./src/util/ThemeManager.js";
import generalAction from "./src/actions/ServiceAction.js";
import { CHANGE_DIRECTION } from "./src/actions/ActionTypes.js";
import I18n from "react-native-i18n";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";

import { MainTabNavigator } from "./navigators";
import { LocalizationContext } from "./src/contexts/LocalizationContext.js";

i18n.fallbacks = true;
i18n.translations = {
  en: require("../Newsfeed/src/translations/en.json"),
  // ms: require("@translations/ms.json"),
  ar: require("../Newsfeed/src/translations/ar.json"),
};

export default function App() {
  const fallback = { languageTag: "ar" };
  const { languageTag } =
    RNLocalize.findBestAvailableLanguage([
      "ar",
      "en",
      // "ms",
    ]) || fallback;

  const [locale, setLocale] = useState(languageTag);
  const localizationContext = useMemo(
    () => ({
      translate: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  useEffect(() => {
    console.log("LOCAL", RNLocalize.getLocales());
    RNLocalize.addEventListener("change", handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener("change", handleLocalizationChange);
    };
  }, []);

  const handleLocalizationChange = () => {
    console.log("handleLocalizationChange");

    const { languageTag } =
      RNLocalize.findBestAvailableLanguage([
        "ar",
        "en",
        // "ms",
      ]) || fallback;
    console.log(languageTag);
    setLocale(languageTag);
  };

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  // state = { isReduxLoaded: false };
  const [reduxLoaded, setReduxLoaded] = useState(true);

  // onBeforeLift = () => {
  //   // this.setState({ isReduxLoaded: true }, () => {});
  //   I18n.locale = store.getState().langDirection.lang;
  //   store.dispatch(
  //     generalAction(CHANGE_DIRECTION, {
  //       RTL: store.getState().langDirection.rtl,
  //       lang: store.getState().langDirection.lang,
  //     })
  //   );
  //   setReduxLoaded(true);
  // };
  // Appearance.addChangeListener((scheme) => {
  //   console.log(scheme.colorScheme);
  // });

  // return (
  //   <Provider store={store}>
  //     <StatusBar barStyle="dark-content" />
  //     <PersistGate onBeforeLift={this.onBeforeLift} persistor={persistor}>
  //       <ThemeProvider>
  //         <MainContainer />
  //       </ThemeProvider>
  //     </PersistGate>
  //   </Provider>
  // );

  return (
    <ThemeProvider>
      <LocalizationContext.Provider value={localizationContext}>
        <MainContainer />
      </LocalizationContext.Provider>
    </ThemeProvider>
  );

  // return (
  //   <ThemeProvider>
  //     <MainContainer />
  //   </ThemeProvider>
  // );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
