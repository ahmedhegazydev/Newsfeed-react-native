import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import SearchBar from "./src/components/SearchBar.js";
import { Appearance } from "react-native";
import MainContainer from "./src/navigation/MainContainer.js";
import { ThemeProvider, ThemeContext } from "./src/util/ThemeManager.js";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import { LocalizationContext } from "./src/contexts/LocalizationContext.js";

i18n.fallbacks = true;
i18n.translations = {
  en: require("../Newsfeed/src/translations/en.json"),
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
