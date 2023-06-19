import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet } from "react-native";
import MainContainer from "./src/navigation/MainContainer";
import { ThemeProvider, ThemeContext } from "./src/util/ThemeManager";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import { LocalizationContext } from "./src/util/LocalizationContext";
import { AsyncStorage } from "react-native";
import { KEY_STORE_LANGUAGE } from "./src/constants/constants";
import enTranslation from "./src/assets/translations/en.json";
import arTranslation from "./src/assets/translations/ar.json";

i18n.fallbacks = true;
i18n.translations = {
  en: enTranslation,
  ar: arTranslation,
};

export default function App() {
  const fallback = { languageTag: "ar" };
  const { languageTag } =
    RNLocalize.findBestAvailableLanguage(["ar", "en"]) || fallback;

  const [locale, setLocale] = useState<string>(languageTag);
  const localizationContext = useMemo(
    () => ({
      translate: (scope: string, options?: any) =>
        i18n.t(scope, { locale, ...options }),
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
  }, []);

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
      RNLocalize.findBestAvailableLanguage(["ar", "en"]) || fallback;
    console.log(languageTag);
    setLocale(languageTag);
  };

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
