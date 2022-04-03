import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Switch,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
// import { AsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-community/async-storage";
// import { AsyncStorage } from "react-native";

import { KEY_STORE_LANGUAGE } from "../../constants/contants";

export default function SettingsScreen({ navigation }) {
  const toggleSwtich = () => {
    setIsEnabled((previouseState) => !previouseState);
    _storeData();
    // _retrieveData();
  };

  let storedLang = "Arabic";

  const _storeData = async () => {
    try {
      // storedLang = _retrieveData();
      // console.log(storedLang);
      currrentLang = "";
      if (storedLang == "Arabic") {
        currrentLang = "English";
      } else {
        currrentLang = "Arabic";
      }
      setLanguage(currrentLang);
      await AsyncStorage.setItem(KEY_STORE_LANGUAGE, currrentLang);
    } catch (error) {
      // Error saving data
      console.log("error _storeData" + error);
    }
  };

  // useEffect(() => {
  //   _retrieveData();
  // }, [isEnabled]);

  useEffect(() => {
    _retrieveData();
  });

  const _retrieveData = async () => {
    let enabling = false;
    // let currrentLang = "Arabic";
    try {
      const value = await AsyncStorage.getItem(KEY_STORE_LANGUAGE);

      if (value !== null) {
        console.log(value);
        // console.log(Boolean(value));
        // setIsEnabled(JSON.parse(value));
        // if (value === "true") {
        //   setIsEnabled(true);
        //   console.log(true);
        // } else {
        //   setIsEnabled(false);
        //   console.log(false);
        // }
        // enabling = JSON.parse(value);
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

  // const [isEnabled, setIsEnabled] = useState(false);
  const [selectedLang, setLanguage] = useState("English");

  return (
    <View style={styles.container}>
      {/* <Text>Settings!</Text> */}
      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwtich}
        value={isEnabled}
        // ios_backgroundColor="red"
      /> */}

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
