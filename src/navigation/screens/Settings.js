import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  TouchableOpacity,
} from "react-native";

import { AsyncStorage } from "react-native";
import { KEY_STORE_LANGUAGE } from "../../constants/constants";
import { LocalizationContext } from "../../contexts/LocalizationContext";

export default function SettingsScreen({ navigation }) {
  let storedLang = "Arabic";

  const _storeData = async () => {
    try {
      currrentLang = "";
      if (storedLang == "Arabic") {
        currrentLang = "English";

        changeLanguage("en");
      } else {
        currrentLang = "Arabic";

        changeLanguage("ar");
      }
      setLanguage(currrentLang);
      await AsyncStorage.setItem(KEY_STORE_LANGUAGE, currrentLang);
    } catch (error) {
      console.log("error _storeData" + error);
    }
  };
  const { locale, setLocale } = useContext(LocalizationContext);

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  useEffect(() => {
    _retrieveData();
  });

  const _retrieveData = async () => {
    let enabling = false;
    // let currrentLang = "Arabic";
    try {
      const value = await AsyncStorage.getItem(KEY_STORE_LANGUAGE);
      if (value !== null) {
        setLanguage(value);
        storedLang = value;
      }
    } catch (error) {
      // Error retrieving data
      console.log("error _retrieveData" + error);
    }
    // return enabling;
    return storedLang;
  };

  const [selectedLang, setLanguage] = useState("English");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => {
          _storeData();
        }}
        underlayColor="#fff"
      >
        <Text style={styles.loginText}>Change To {selectedLang}</Text>
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
