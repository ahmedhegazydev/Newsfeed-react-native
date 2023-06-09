import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Appearance } from "react-native";
import MainContainer from "./src/navigation/MainContainer.tsx";
import { ThemeProvider, ThemeContext } from "./src/util/ThemeManager.tsx";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import { LocalizationContext } from "./src/util/LocalizationContext.tsx";
import { AsyncStorage } from "react-native";
import { KEY_STORE_LANGUAGE } from "./src/constants/constants.tsx";

i18n.fallbacks = true;
i18n.translations = {
  en: require("./src/assets/translations/en.json"),
  ar: require("./src/assets/translations/ar.json"),
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

  useEffect(() => {
    _retrieveData();
  });

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(KEY_STORE_LANGUAGE);
      if (value !== null) {
        if (value == "Arabic") {
          setLocale("en");
        } else {
          setLocale("ar");
        }
      }
    } catch (error) {
      console.log("error _retrieveData" + error);
    }
  };

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

  // const [theme, setTheme] = useState(Appearance.getColorScheme());

  return (
    <ThemeProvider>
      <LocalizationContext.Provider value={localizationContext}>
        <MainContainer />
      </LocalizationContext.Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
