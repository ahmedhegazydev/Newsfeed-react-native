import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { AsyncStorage } from "react-native";
import { KEY_STORE_LANGUAGE } from "../../constants/constants";
import { LocalizationContext } from "../../util/LocalizationContext";

export default function SettingsScreen({ navigation }) {
  let storedLang = "Arabic";

  const _storeData = async () => {
    try {
      let currentLang = "";
      if (storedLang == "Arabic") {
        currentLang = "English";
        changeLanguage("ar");
      } else {
        currentLang = "Arabic";
        changeLanguage("en");
      }
      setLanguage(currentLang);
      await AsyncStorage.setItem(KEY_STORE_LANGUAGE, currentLang);
    } catch (error) {
      console.log("error _storeData" + error);
    }
  };
  const { locale, setLocale } = useContext(LocalizationContext);

  const changeLanguage = (lang: string) => {
    setLocale(lang);
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(KEY_STORE_LANGUAGE);
      if (value !== null) {
        setLanguage(value);
        if (value == "Arabic") {
          setLocale("en");
        } else {
          setLocale("ar");
        }
        storedLang = value;
      }
    } catch (error) {
      console.log("error _retrieveData" + error);
    }
    return storedLang;
  };

  const [selectedLang, setLanguage] = useState<string>("English");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => {
          _storeData();
        }}
        underlayColor="#fff"
        testID="changeLanguageButton"
        accessibilityLabel="changeLanguageButton"
      >
        <Text
          style={styles.loginText}
          testID="languageSetting"
          accessibilityLabel="languageSetting"
        >
          Change To {selectedLang}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
